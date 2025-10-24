# Configuration Reference

The HeroUI Font Picker is designed to be self-contained and requires no configuration. However, there are optional props and settings available.

## No Configuration Required

This package is completely self-contained:

- ✅ **No environment variables** needed
- ✅ **No configuration files** required
- ✅ **No external setup** necessary
- ✅ **Works out of the box** across all React frameworks

## Component Props

### FontPicker Props

All props are optional with sensible defaults:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showFontPreview` | `boolean` | `true` | Show sprite-based font previews |
| `loadAllVariants` | `boolean` | `false` | Load all font variants vs 4 essential |
| `onFontsLoaded` | `(loaded: boolean) => void` | - | Callback when fonts finish loading |
| `fontsLoadedTimeout` | `number` | `3000` | Timeout for font loading detection (ms) |

### HeroUI Autocomplete Props

The FontPicker extends HeroUI's Autocomplete component, so all Autocomplete props are available:

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

## Framework-Specific Configuration

### Next.js (Optional)

For optimal performance in Next.js, add this to your `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@rachelallyson/heroui-font-picker'],
  async rewrites() {
    return [
      {
        source: '/sprite.:path*',
        destination: '/node_modules/@rachelallyson/heroui-font-picker/dist/sprite.:path*'
      }
    ];
  }
}

module.exports = nextConfig
```

**Note**: This is only needed for Next.js. Other frameworks work without any configuration.

### Vite

No configuration needed - works out of the box.

### Create React App

No configuration needed - works out of the box.

## Installation Options

### Option 1: Full HeroUI Package

```bash
npm install @rachelallyson/heroui-font-picker @heroui/react react react-dom
```

**Benefits**:

- Complete HeroUI component library
- All HeroUI components available
- Larger bundle size

### Option 2: Autocomplete-Only Package

```bash
npm install @rachelallyson/heroui-font-picker @heroui/autocomplete react react-dom
```

**Benefits**:

- Smaller bundle size
- Only autocomplete components
- Tree-shaking friendly

## Environment Variables

No environment variables are required or used by this package.

## Build Configuration

### TypeScript

The package includes full TypeScript definitions. No additional configuration needed:

```typescript
import { FontPicker, FontPickerProps } from '@rachelallyson/heroui-font-picker';
```

### CSS

CSS files are automatically included. No manual imports needed:

```typescript
// CSS is automatically loaded
import { FontPicker } from '@rachelallyson/heroui-font-picker';
```

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

## Performance Configuration

### Font Loading Optimization

```tsx
// Default: Load 4 essential variants
<FontPicker loadAllVariants={false} />

// Load all variants (slower, larger bundle)
<FontPicker loadAllVariants={true} />
```

### Timeout Configuration

```tsx
// Default: 3 second timeout
<FontPicker fontsLoadedTimeout={3000} />

// Longer timeout for slow connections
<FontPicker fontsLoadedTimeout={10000} />
```

### Preview Configuration

```tsx
// Default: Show sprite previews
<FontPicker showFontPreview={true} />

// Disable previews for faster rendering
<FontPicker showFontPreview={false} />
```

## Asset Configuration

### Sprite Files

The package includes pre-rendered sprite files:

- **Location**: `dist/sprite.*.svg`
- **Size**: ~30MB total
- **Format**: SVG sprites with CSS positioning

### CSS Files

The package includes CSS for sprite positioning:

- **Location**: `dist/font-previews.css`
- **Size**: ~50KB
- **Format**: CSS with background positioning

### Font Data

The package includes static font data:

- **Location**: `src/font-preview/fontInfo.json`
- **Size**: ~500KB
- **Content**: 1,785+ Google Fonts metadata

## Security Configuration

### Content Security Policy

If using CSP, allow these sources:

```html
<meta http-equiv="Content-Security-Policy" content="
  font-src https://fonts.googleapis.com https://fonts.gstatic.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
">
```

### External Resources

The package only loads fonts from:

- **Google Fonts API**: `https://fonts.googleapis.com`
- **Google Fonts CDN**: `https://fonts.gstatic.com`

No other external resources are loaded.

## Development Configuration

### Debug Mode

```tsx
// Enable debug logging
<FontPicker
  onFontsLoaded={(loaded) => console.log('Fonts loaded:', loaded)}
  fontsLoadedTimeout={10000} // Increase timeout for debugging
/>
```

### Development vs Production

The package automatically detects the environment:

- **Development**: More verbose logging
- **Production**: Optimized performance

No manual configuration needed.

## Troubleshooting Configuration

### Common Issues

1. **HeroUI not found**: Install `@heroui/react` or `@heroui/autocomplete`
2. **Fonts not loading**: Check network connection and Google Fonts API access
3. **Previews not showing**: Ensure CSS files are properly loaded
4. **TypeScript errors**: Ensure proper type imports

### Debug Configuration

```tsx
// Enable all debug features
<FontPicker
  showFontPreview={true}
  loadAllVariants={false}
  onFontsLoaded={(loaded) => {
    console.log('Font loading result:', loaded);
  }}
  fontsLoadedTimeout={10000}
  onSelectionChange={(key) => {
    console.log('Font selected:', key);
  }}
/>
```
