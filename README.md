# @rachel-allyson/heroui-font-picker

A powerful font picker component for HeroUI with Google Fonts integration and sprite-based previews.

## Features

- 🎨 **1,785+ Google Fonts** with instant previews
- 🖼️ **Sprite-based Previews** - Zero loading time for font previews
- 🚀 **Intelligent Loading** - Only loads 4 essential variants by default
- 🎯 **HeroUI Integration** - Seamless integration with HeroUI components
- 📱 **React Hook Form** - Built-in support for form integration
- ⚡ **TypeScript** - Full TypeScript support
- 🎨 **Customizable** - Flexible styling and behavior options

## Installation

```bash
npm install @rachel-allyson/heroui-font-picker
```

### Dual Package Strategy

The font picker uses a **dual import strategy** that provides flexibility for users to choose between individual HeroUI packages or the all-in-one `@heroui/react` package:

#### **Default Path: Individual Packages**

```bash
npm install @rachel-allyson/heroui-font-picker @heroui/autocomplete react react-dom
```

```typescript
import { FontPicker } from '@rachel-allyson/heroui-font-picker';
// Uses individual @heroui/autocomplete package
```

#### **Alternative Path: All-in-One Package**

```bash
npm install @rachel-allyson/heroui-font-picker @heroui/react react react-dom
```

```typescript
import { FontPicker } from '@rachel-allyson/heroui-font-picker/react';
// Uses @heroui/react package
```

### Benefits

- **Bundle Size**: Individual packages allow tree-shaking for smaller bundles
- **Flexibility**: Choose the approach that fits your project
- **Compatibility**: Works with both installation strategies
- **Future-Proof**: Can adapt if HeroUI's packaging strategy changes

## Quick Start

### Basic Usage

```tsx
import { FontPicker } from '@rachel-allyson/heroui-font-picker';

function MyComponent() {
  const [selectedFont, setSelectedFont] = useState('Inter');

  return (
    <FontPicker
      label="Choose Font"
      description="Select your preferred font"
      value={selectedFont}
      onSelectionChange={(key) => setSelectedFont(key as string)}
      placeholder="Choose a font..."
      showFontPreview={true}
      size="md"
      variant="bordered"
      isRequired
    />
  );
}
```

### With Form Integration

```tsx
import { FontPickerField } from '@rachel-allyson/heroui-font-picker';

function MyForm() {
  const [font, setFont] = useState('Inter');
  const [error, setError] = useState('');

  return (
    <FontPickerField
      label="Choose Font"
      description="Select your preferred font"
      value={font}
      onChange={setFont}
      error={error}
      fontPickerProps={{
        showFontPreview: true,
        loadAllVariants: false
      }}
    />
  );
}
```

## Props

### FontPicker Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Current selected font |
| `onChange` | `(value: string) => void` | - | Callback when font changes |
| `disabled` | `boolean` | `false` | Whether the picker is disabled |
| `showFontPreview` | `boolean` | `true` | Show font preview sprites |
| `loadAllVariants` | `boolean` | `false` | Load all font variants vs 4 essential |
| `onFontsLoaded` | `(loaded: boolean) => void` | - | Callback when fonts finish loading |
| `fontsLoadedTimeout` | `number` | `3000` | Timeout for font loading detection |
| `placeholder` | `string` | `"Select a font..."` | Placeholder text |
| `className` | `string` | - | Additional CSS classes |

### FontPickerField Props

All FontPicker props plus:

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Field label |
| `description` | `string` | Field description |
| `value` | `string` | Current field value |
| `onChange` | `(value: string) => void` | Change handler |
| `error` | `string` | Error message to display |

## Advanced Usage

### Custom Font Loading

```tsx
import { loadGoogleFont, getFourVariants } from '@rachel-allyson/heroui-font-picker';

// Load specific font with all variants
loadGoogleFont('Inter', ['0,300', '0,400', '0,500', '0,600', '0,700']);

// Load font with intelligent 4-variant selection
const font = { variants: ['0,300', '0,400', '0,500', '0,600', '0,700', '1,300', '1,400'] };
const essentialVariants = getFourVariants(font.variants);
loadGoogleFont('Inter', essentialVariants);
```

### Font Loading Detection

```tsx
import { checkFontLoaded } from '@rachel-allyson/heroui-font-picker';

const isLoaded = await checkFontLoaded('Inter', 5000);
console.log('Font loaded:', isLoaded);
```

## Sprite System

The font picker uses a sophisticated sprite system for instant font previews:

- **1,785+ Google Fonts** pre-rendered as sprites
- **Zero loading time** for previews
- **30MB sprite files** for complete coverage
- **CSS positioning** for efficient rendering

### Asset Management

The package is completely self-contained and includes all necessary assets (sprite files and CSS). The font picker automatically loads its required assets.

#### Framework Support

The package works seamlessly across all React frameworks:

- **Next.js**: Works out of the box (demo includes minimal Next.js config for asset serving)
- **Vite**: Works out of the box
- **Create React App**: Works out of the box
- **Any other React framework**: Works out of the box

#### For Next.js Users

The demo includes a simple Next.js configuration that serves assets from the package. You can copy this configuration to your `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@rachel-allyson/heroui-font-picker'],
    async rewrites() {
        return [
            {
                source: '/sprite.:path*',
                destination: '/node_modules/@rachel-allyson/heroui-font-picker/dist/sprite.:path*'
            }
        ];
    }
}

module.exports = nextConfig
```

**Note**: This is only needed for Next.js. Other frameworks work without any configuration!

#### Inspired by react-fontpicker

This package takes inspiration from [react-fontpicker](https://github.com/ae9is/react-fontpicker) but with key improvements:

- **Zero configuration**: No manual CSS imports required
- **HeroUI integration**: Built specifically for HeroUI components
- **Self-contained**: All assets bundled with the package
- **Modern approach**: Uses absolute paths for better asset resolution

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
