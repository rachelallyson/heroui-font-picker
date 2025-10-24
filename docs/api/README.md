# API Reference

Complete API documentation for the HeroUI Font Picker.

## Components

### [FontPicker](./FontPicker.md)

Main font picker component built on HeroUI's Autocomplete.

## Types

### [FontPickerProps](./FontPickerProps.md)

Props interface for the FontPicker component.

### [GoogleFont](./GoogleFont.md)

Interface for Google Font data structure.

### [FontPreview](./FontPreview.md)

Interface for font preview objects.

### [FourFonts](./FourFonts.md)

Interface for four essential font variants.

## Utilities

### [getFourVariants](./getFourVariants.md)

Selects the 4 most essential font variants from a list.

### [checkFontLoaded](./checkFontLoaded.md)

Checks if a font is loaded using the Font Loading API.

### [loadGoogleFont](./loadGoogleFont.md)

Loads a Google Font with specified variants.

### [sanitizeFontName](./sanitizeFontName.md)

Sanitizes a font name for use in CSS class names.

### [createFontPreview](./createFontPreview.md)

Creates a font preview object with text, styling, and CSS class.

## Quick Start

```tsx
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function MyComponent() {
  const [font, setFont] = useState('Inter');
  
  return (
    <FontPicker
      value={font}
      onSelectionChange={setFont}
      showFontPreview={true}
    />
  );
}
```

## Installation

```bash
# Install with full HeroUI package
npm install @rachelallyson/heroui-font-picker @heroui/react react react-dom

# Or with autocomplete-only package
npm install @rachelallyson/heroui-font-picker @heroui/autocomplete react react-dom
```

## Features

- 🎨 **1,785+ Google Fonts** with instant previews
- 🖼️ **Sprite-based Previews** - Zero loading time for font previews
- 🚀 **Intelligent Loading** - Only loads 4 essential variants by default
- 🎯 **HeroUI Integration** - Seamless integration with HeroUI components
- 📱 **Dual Package Support** - Works with `@heroui/react` or `@heroui/autocomplete`
- ⚡ **TypeScript** - Full TypeScript support
- 🎨 **Self-contained** - All assets bundled, no external configuration

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Framework Support

Works seamlessly across all React frameworks:

- **Next.js**: Works out of the box (demo includes minimal config)
- **Vite**: Works out of the box
- **Create React App**: Works out of the box
- **Any React framework**: Works out of the box

## Getting Help

- [Quick Start Guide](../guides/quickstart.md)
- [Concepts](../concepts.md)
- [Examples](../recipes/examples.md)
- [Troubleshooting](../troubleshooting.md)
- [GitHub Issues](https://github.com/rachelallyson/heroui-font-picker/issues)
