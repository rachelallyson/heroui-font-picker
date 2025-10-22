// Removed react-hook-form dependencies for better flexibility

// Google Font interface matching react-fontpicker structure
export interface GoogleFont {
  name: string;
  category: string;
  sane: string;
  variants: string[];
  subsets: string[];
}

// Import Autocomplete props from HeroUI
import type { AutocompleteProps } from '@heroui/react';

// Font picker component props - extends HeroUI Autocomplete with font-specific features
export interface FontPickerProps extends Omit<AutocompleteProps, 'children' | 'items'> {
  // Font-specific functionality
  showFontPreview?: boolean;
  loadAllVariants?: boolean;
  onFontsLoaded?: (loaded: boolean) => void;
  fontsLoadedTimeout?: number;
}


// Font preview result
export interface FontPreview {
  text: string;
  style: React.CSSProperties;
  className: string;
  fontFamily: string;
  category: string;
}

// Font variant selection
export interface FourFonts {
  regular?: number;
  bold?: number;
  italic?: number;
  boldItalic?: number;
}
