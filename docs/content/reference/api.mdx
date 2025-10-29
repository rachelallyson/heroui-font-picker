# API Reference

Complete reference for the HeroUI Font Picker API.

## Components

### FontPicker

The main font picker component built on HeroUI's Autocomplete.

```tsx
import { FontPicker } from '@rachelallyson/heroui-font-picker';
```

#### Props

**Font-specific props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showFontPreview` | `boolean` | `true` | Show sprite-based font previews |
| `loadAllVariants` | `boolean` | `false` | Load all font variants vs 4 essential |
| `onFontsLoaded` | `(loaded: boolean) => void` | - | Callback when fonts finish loading |
| `fontsLoadedTimeout` | `number` | `3000` | Timeout for font loading detection (ms) |

**HeroUI Autocomplete props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Current selected font |
| `onSelectionChange` | `(key: React.Key \| null) => void` | - | Callback when selection changes |
| `label` | `string` | - | Field label |
| `description` | `string` | - | Field description |
| `placeholder` | `string` | `"Select a font..."` | Placeholder text |
| `disabled` | `boolean` | `false` | Whether the picker is disabled |
| `isRequired` | `boolean` | `false` | Whether the field is required |
| `isClearable` | `boolean` | `false` | Whether the field can be cleared |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Component size |
| `variant` | `"flat" \| "bordered" \| "faded" \| "underlined"` | `"flat"` | Visual variant |
| `color` | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "danger"` | `"default"` | Color scheme |
| `className` | `string` | - | Additional CSS classes |
| `classNames` | `object` | - | Custom class names for sub-components |

#### Example

```tsx
<FontPicker
  label="Choose Font"
  value={selectedFont}
  onSelectionChange={(key) => setSelectedFont(key as string)}
  showFontPreview={true}
  loadAllVariants={false}
  size="lg"
  variant="bordered"
  isRequired
/>
```

## Types

### FontPickerProps

```typescript
interface FontPickerProps extends Omit<AutocompleteProps, 'children' | 'items'> {
  showFontPreview?: boolean;
  loadAllVariants?: boolean;
  onFontsLoaded?: (loaded: boolean) => void;
  fontsLoadedTimeout?: number;
}
```

### GoogleFont

```typescript
interface GoogleFont {
  name: string;        // "Inter"
  category: string;    // "sans-serif"
  sane: string;        // "inter"
  variants: string[];  // ["0,300", "0,400", "0,500", "0,600", "0,700"]
  subsets: string[];   // ["latin", "latin-ext"]
}
```

### FontPreview

```typescript
interface FontPreview {
  text: string;
  style: React.CSSProperties;
  className: string;
  fontFamily: string;
  category: string;
}
```

### FourFonts

```typescript
interface FourFonts {
  regular?: number;
  bold?: number;
  italic?: number;
  boldItalic?: number;
}
```

## Utility Functions

### getFourVariants

Selects the 4 most essential font variants from a list.

```typescript
function getFourVariants(variants: string[]): string[]
```

**Parameters:**

- `variants` - Array of variant strings like `["0,300", "0,400", "0,500", "0,600", "0,700"]`

**Returns:**

- Array of 4 best variants like `["400", "700", "400italic", "700italic"]`

**Example:**

```tsx
import { getFourVariants } from '@rachelallyson/heroui-font-picker';

const font = { variants: ['0,300', '0,400', '0,500', '0,600', '0,700', '1,300', '1,400'] };
const essentialVariants = getFourVariants(font.variants);
// Returns: ['400', '700', '400italic', '700italic']
```

### checkFontLoaded

Checks if a font is loaded using the Font Loading API.

```typescript
function checkFontLoaded(fontFamily: string, timeout?: number): Promise<boolean>
```

**Parameters:**

- `fontFamily` - Font family name
- `timeout` - Timeout in milliseconds (default: 3000)

**Returns:**

- Promise that resolves to `true` if font is loaded, `false` otherwise

**Example:**

```tsx
import { checkFontLoaded } from '@rachelallyson/heroui-font-picker';

const isLoaded = await checkFontLoaded('Inter', 5000);
console.log('Font loaded:', isLoaded);
```

### loadGoogleFont

Loads a Google Font with specified variants.

```typescript
function loadGoogleFont(fontFamily: string, variants: string[]): void
```

**Parameters:**

- `fontFamily` - Font family name
- `variants` - Array of variants to load

**Example:**

```tsx
import { loadGoogleFont } from '@rachelallyson/heroui-font-picker';

// Load font with specific variants
loadGoogleFont('Inter', ['400', '700', '400italic', '700italic']);
```

### sanitizeFontName

Sanitizes a font name for use in CSS class names.

```typescript
function sanitizeFontName(name: string): string
```

**Parameters:**

- `name` - Font name to sanitize

**Returns:**

- Sanitized name safe for CSS classes

**Example:**

```tsx
import { sanitizeFontName } from '@rachelallyson/heroui-font-picker';

const className = sanitizeFontName('Open Sans');
// Returns: "open_sans"
```

### createFontPreview

Creates a font preview object with text, styling, and CSS class.

```typescript
function createFontPreview(fontFamily: string, category: string): FontPreview
```

**Parameters:**

- `fontFamily` - Font family name
- `category` - Font category

**Returns:**

- FontPreview object with text, style, className, fontFamily, and category

**Example:**

```tsx
import { createFontPreview } from '@rachelallyson/heroui-font-picker';

const preview = createFontPreview('Inter', 'sans-serif');
// Returns: {
//   text: "Sans Serif",
//   style: {},
//   className: "font-preview-inter",
//   fontFamily: "Inter",
//   category: "sans-serif"
// }
```

## Advanced Usage

### Custom Font Loading

```tsx
import { loadGoogleFont, getFourVariants } from '@rachelallyson/heroui-font-picker';

// Load font with all variants
loadGoogleFont('Inter', ['0,300', '0,400', '0,500', '0,600', '0,700']);

// Load font with intelligent 4-variant selection
const font = { variants: ['0,300', '0,400', '0,500', '0,600', '0,700', '1,300', '1,400'] };
const essentialVariants = getFourVariants(font.variants);
loadGoogleFont('Inter', essentialVariants);
```

### Font Loading Detection

```tsx
import { checkFontLoaded } from '@rachelallyson/heroui-font-picker';

const isLoaded = await checkFontLoaded('Inter', 5000);
if (isLoaded) {
  console.log('Font is ready to use');
} else {
  console.log('Font loading failed or timed out');
}
```

### Custom Preview Creation

```tsx
import { createFontPreview } from '@rachelallyson/heroui-font-picker';

const preview = createFontPreview('Inter', 'sans-serif');
const previewElement = (
  <div 
    className={preview.className}
    style={preview.style}
  >
    {preview.text}
  </div>
);
```

## Error Handling

### Component Errors

```tsx
<FontPicker
  onFontsLoaded={(loaded) => {
    if (!loaded) {
      console.warn('Font loading failed, using fallback');
      // Apply fallback font
      document.body.style.fontFamily = 'system-ui, sans-serif';
    }
  }}
  fontsLoadedTimeout={5000}
/>
```

### Utility Function Errors

```tsx
import { loadGoogleFont, checkFontLoaded } from '@rachelallyson/heroui-font-picker';

async function loadFontWithRetry(fontName, variants, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      loadGoogleFont(fontName, variants);
      const loaded = await checkFontLoaded(fontName, 5000);
      if (loaded) return true;
    } catch (error) {
      console.warn(`Font loading attempt ${i + 1} failed:`, error);
      if (i === maxRetries - 1) return false;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
  return false;
}
```

## Performance Considerations

### Bundle Size

- **Sprites**: 30MB (included in package)
- **Font Data**: ~500KB JSON
- **CSS**: ~50KB sprite positioning
- **JavaScript**: ~20KB (minified)

### Loading Strategy

- **Previews**: Instant (sprites)
- **Selected Fonts**: On-demand (Google Fonts API)
- **Variant Selection**: 4 variants max (vs 20+ available)

### Memory Usage

- **Sprites**: Loaded once, cached by browser
- **Fonts**: Only loaded when selected
- **CSS**: Minimal memory footprint

## Browser Support

### Required Features

- **CSS Sprites**: Background positioning
- **Font Loading API**: `document.fonts.check()`
- **ES6 Modules**: Import/export syntax
- **React 16.8+**: Hooks support

### Supported Browsers

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
