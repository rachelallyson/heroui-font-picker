/**
 * Font utilities for FontPickerField
 * Based on react-fontpicker best practices
 */

export interface FontVariant {
  italic: boolean;
  weight: number;
}

export interface FourFonts {
  regular?: number;
  bold?: number;
  italic?: number;
  boldItalic?: number;
}

/**
 * Convert variant string to standard format
 * @param variant - Variant string like "400italic" or "700"
 * @returns Standard format like "1,400" (italic,weight) or "0,400" (normal,weight)
 */
export function normalizeVariant(variant: string): string {
  const isItalic = variant.toLowerCase().includes('italic');
  const weight = parseInt(variant.replace(/[^\d]/g, '')) || 400;
  return `${isItalic ? '1' : '0'},${weight}`;
}

/**
 * Convert standard format back to Google Fonts format
 * @param variant - Standard format like "1,400"
 * @returns Google Fonts format like "400italic"
 */
export function toGoogleFontsFormat(variant: string): string {
  const [italic, weight] = variant.split(',').map(Number);
  return italic ? `${weight}italic` : weight.toString();
}

/**
 * Get the best 4 variants for optimal font loading
 * Based on react-fontpicker's getFourVariants logic
 * @param variants - Array of variant strings
 * @returns Array of 4 best variants
 */
export function getFourVariants(variants: string[]): string[] {
  // Convert to standard format and separate by type
  const standardVariants = variants.map(normalizeVariant);
  
  const regularWeights = standardVariants
    .filter(v => v.startsWith('0,'))
    .map(v => parseInt(v.substring(2)))
    .sort((a, b) => a - b);
    
  const italicWeights = standardVariants
    .filter(v => v.startsWith('1,'))
    .map(v => parseInt(v.substring(2)))
    .sort((a, b) => a - b);

  const fourFonts: FourFonts = {};

  // Best regular font is closest to 400
  fourFonts.regular = regularWeights
    .sort((a, b) => Math.abs(399 - a) - Math.abs(399 - b))
    .shift();

  // Best bold font is larger than regular, closest to 700
  fourFonts.bold = regularWeights
    .filter(v => v > (fourFonts.regular || 0))
    .sort((a, b) => Math.abs(700 - a) - Math.abs(700 - b))
    .shift();

  // Same logic for italics
  fourFonts.italic = italicWeights
    .sort((a, b) => Math.abs(399 - a) - Math.abs(399 - b))
    .shift();

  fourFonts.boldItalic = italicWeights
    .filter(v => v > (fourFonts.italic || 0))
    .sort((a, b) => Math.abs(700 - a) - Math.abs(700 - b))
    .shift();

  // Convert back to Google Fonts format
  const fourVariants: string[] = [];
  
  if (fourFonts.regular) {
    fourVariants.push(fourFonts.regular.toString());
  }
  if (fourFonts.bold) {
    fourVariants.push(fourFonts.bold.toString());
  }
  if (fourFonts.italic) {
    fourVariants.push(`${fourFonts.italic}italic`);
  }
  if (fourFonts.boldItalic) {
    fourVariants.push(`${fourFonts.boldItalic}italic`);
  }

  return fourVariants;
}

/**
 * Check if a font is loaded using the Font Loading API
 * @param fontFamily - Font family name
 * @param timeout - Timeout in milliseconds
 * @returns Promise<boolean> - True if font is loaded
 */
export async function checkFontLoaded(
  fontFamily: string, 
  timeout: number = 3000
): Promise<boolean> {
  return new Promise((resolve) => {
    const startTime = Date.now();
    
    const checkFont = () => {
      try {
        // Use document.fonts.check() if available
        if ('fonts' in document && 'check' in document.fonts) {
          const isLoaded = document.fonts.check(`16px "${fontFamily}"`);
          if (isLoaded) {
            resolve(true);
            return;
          }
        }
        
        // Fallback: check if font is in the document
        const isInDocument = Array.from(document.styleSheets).some(sheet => {
          try {
            return Array.from(sheet.cssRules || []).some(rule => {
              if (rule instanceof CSSFontFaceRule) {
                return rule.style.fontFamily.includes(fontFamily);
              }
              return false;
            });
          } catch {
            return false;
          }
        });
        
        if (isInDocument) {
          resolve(true);
          return;
        }
        
        // Check timeout
        if (Date.now() - startTime > timeout) {
          resolve(false);
          return;
        }
        
        // Check again in 100ms
        setTimeout(checkFont, 100);
      } catch (error) {
        resolve(false);
      }
    };
    
    checkFont();
  });
}

/**
 * Load Google Font CSS dynamically (only for selected fonts, not previews)
 * @param fontFamily - Font family name
 * @param variants - Array of variants to load
 */
export function loadGoogleFont(fontFamily: string, variants: string[]): void {
  if (!fontFamily || variants.length === 0) return;
  
  // Check if font is already loaded
  const existingLink = document.querySelector(
    `link[href*="${fontFamily.replace(/\s+/g, '+')}"]`
  );
  if (existingLink) return;

  // Create unique CSS ID to prevent duplicate loading
  const cssId = `google-font-${sanitizeFontName(fontFamily)}-${variants.sort().join('-')}`;
  
  // Check if this specific variant combination is already loaded
  if (document.getElementById(cssId)) return;

  // Create link element
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.id = cssId;
  link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s+/g, '+')}:wght@${variants.join(';')}&display=swap`;
  link.setAttribute('data-testid', cssId); // For testing
  
  // Add to document head
  document.head.appendChild(link);
}

/**
 * Create font preview using sprite system from react-fontpicker
 * This provides instant previews using pre-rendered sprites
 * @param fontFamily - Font family name
 * @returns CSS style object for font preview
 */
export function createFontPreviewStyle(fontFamily: string): React.CSSProperties {
  return {
    // Use the CSS class for sprite positioning instead of inline styles
    // The CSS file handles the background-image and positioning
  } as React.CSSProperties;
}

/**
 * Get the CSS class name for font preview sprite
 * @param fontFamily - Font family name
 * @returns CSS class name for the sprite
 */
export function getFontPreviewClassName(fontFamily: string): string {
  const saneName = sanitizeFontName(fontFamily);
  return `font-preview-${saneName}`;
}

/**
 * Generate font preview text based on font family (using react-fontpicker approach)
 * @param fontFamily - Font family name
 * @returns Preview text that showcases the font well
 */
export function getFontPreviewText(fontFamily: string): string {
  // Use different preview text based on font category, similar to react-fontpicker
  const displayFonts = ['Bebas Neue', 'Anton', 'Bangers', 'Fredoka One', 'Righteous', 'Lobster', 'Pacifico', 'Dancing Script', 'Great Vibes', 'Satisfy', 'Kalam', 'Permanent Marker', 'Caveat', 'Amatic SC', 'Indie Flower', 'Shadows Into Light', 'Comfortaa', 'Quicksand'];
  const serifFonts = ['Playfair Display', 'Merriweather', 'Lora', 'Crimson Text', 'Libre Baskerville', 'PT Serif', 'Source Serif Pro', 'Crimson Pro', 'Libre Caslon Text', 'Bitter'];
  const monoFonts = ['Fira Code', 'JetBrains Mono', 'Source Code Pro', 'Roboto Mono', 'Inconsolata', 'Cascadia Code', 'Victor Mono', 'Cousine'];
  const sansSerifFonts = ['Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Source Sans Pro', 'Raleway', 'PT Sans', 'Oswald', 'Nunito', 'Poppins', 'Work Sans', 'Inter', 'Ubuntu'];
  
  if (displayFonts.includes(fontFamily)) {
    return 'DISPLAY FONT';
  } else if (serifFonts.includes(fontFamily)) {
    return 'Serif Typography';
  } else if (monoFonts.includes(fontFamily)) {
    return 'monospace';
  } else if (sansSerifFonts.includes(fontFamily)) {
    return 'Sans Serif';
  } else {
    return 'Font Preview';
  }
}

/**
 * Create a comprehensive font preview component using react-fontpicker sprites
 * @param fontFamily - Font family name
 * @param category - Font category
 * @returns Object with preview text and styling
 */
export function createFontPreview(fontFamily: string, category: string) {
  const previewText = getFontPreviewText(fontFamily);
  const style = createFontPreviewStyle(fontFamily);
  const className = getFontPreviewClassName(fontFamily);
  
  return {
    text: previewText,
    style,
    className,
    fontFamily,
    category
  };
}

/**
 * Sanitize font name for CSS class names
 * @param name - Font name
 * @returns Sanitized name safe for CSS classes
 */
export function sanitizeFontName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

/**
 * Convert Google Fonts variants to CSS font-weight and font-style
 * @param variant - Google Fonts variant like "400italic"
 * @returns CSS properties object
 */
export function variantToCSS(variant: string): { fontWeight: string; fontStyle: string } {
  const isItalic = variant.toLowerCase().includes('italic');
  const weight = variant.replace(/[^\d]/g, '') || '400';
  
  return {
    fontWeight: weight,
    fontStyle: isItalic ? 'italic' : 'normal'
  };
}

/**
 * Get font display name with fallback
 * @param fontFamily - Font family name
 * @returns Display name with fallback
 */
export function getFontDisplayName(fontFamily: string): string {
  return fontFamily || 'System Font';
}

/**
 * Check if a font is a system font
 * @param fontFamily - Font family name
 * @returns True if it's a common system font
 */
export function isSystemFont(fontFamily: string): boolean {
  const systemFonts = [
    'Arial', 'Helvetica', 'Times New Roman', 'Times', 'Courier New', 'Courier',
    'Verdana', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS',
    'Trebuchet MS', 'Arial Black', 'Impact'
  ];
  
  return systemFonts.includes(fontFamily);
}
