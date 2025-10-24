# Quick Start Guide

Get up and running with the HeroUI Font Picker in 5 minutes.

## Installation

### Option 1: Full HeroUI Package (Recommended)

```bash
npm install @rachelallyson/heroui-font-picker @heroui/react react react-dom
```

### Option 2: Autocomplete-Only Package (Smaller Bundle)

```bash
npm install @rachelallyson/heroui-font-picker @heroui/autocomplete react react-dom
```

## Basic Usage

### 1. Simple Font Picker

```tsx
import React, { useState } from 'react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function MyComponent() {
  const [selectedFont, setSelectedFont] = useState('Inter');

  return (
    <FontPicker
      label="Choose Font"
      value={selectedFont}
      onSelectionChange={(key) => setSelectedFont(key as string)}
      placeholder="Choose a font..."
      showFontPreview={true}
    />
  );
}
```

### 2. With Form Integration

```tsx
import React, { useState } from 'react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function MyForm() {
  const [font, setFont] = useState('Roboto');
  const [error, setError] = useState('');

  return (
    <div>
      <FontPicker
        label="Choose Font"
        description="Select your preferred font"
        value={font}
        onSelectionChange={(key) => setFont(key as string)}
        error={error}
        showFontPreview={true}
        isRequired
      />
      <p>Selected: {font}</p>
    </div>
  );
}
```

### 3. Advanced Configuration

```tsx
import React, { useState } from 'react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function AdvancedExample() {
  const [font, setFont] = useState('Inter');
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <FontPicker
      label="Choose Font"
      description="Select your preferred font"
      value={font}
      onSelectionChange={(key) => setFont(key as string)}
      showFontPreview={true}
      loadAllVariants={false} // Only load 4 essential variants
      onFontsLoaded={setFontsLoaded}
      fontsLoadedTimeout={5000}
      size="lg"
      variant="bordered"
      isClearable
      isRequired
      className="w-full"
    />
  );
}
```

## Framework-Specific Setup

### Next.js

The package works out of the box with Next.js. For optimal performance, add this to your `next.config.js`:

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

### Vite

No configuration needed - works out of the box.

### Create React App

No configuration needed - works out of the box.

## Expected Output

When you run the basic example, you should see:

1. **Font Picker Dropdown** - Click to open and see 1,785+ fonts
2. **Sprite Previews** - Instant font previews using pre-rendered images
3. **Font Loading** - Selected fonts load from Google Fonts API
4. **Responsive Design** - Works on all screen sizes

## Common Patterns

### With React Hook Form

```tsx
import { useForm, Controller } from 'react-hook-form';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function FormExample() {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <Controller
        name="font"
        control={control}
        render={({ field }) => (
          <FontPicker
            label="Choose Font"
            value={field.value}
            onSelectionChange={field.onChange}
            showFontPreview={true}
          />
        )}
      />
    </form>
  );
}
```

### With State Management

```tsx
import { useState, useEffect } from 'react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function StateExample() {
  const [font, setFont] = useState('Inter');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Apply font to document
    document.body.style.fontFamily = font;
  }, [font]);

  return (
    <FontPicker
      label="Choose Font"
      value={font}
      onSelectionChange={setFont}
      onFontsLoaded={setIsLoading}
      showFontPreview={true}
    />
  );
}
```

## Troubleshooting

### Common Issues

**Issue**: "HeroUI components not found"
**Solution**: Install either `@heroui/react` or `@heroui/autocomplete`

**Issue**: Fonts not loading
**Solution**: Check network connection and Google Fonts API access

**Issue**: Previews not showing
**Solution**: Ensure CSS files are properly loaded

### Debug Mode

Enable debug logging:

```tsx
<FontPicker
  // ... other props
  onFontsLoaded={(loaded) => console.log('Fonts loaded:', loaded)}
  fontsLoadedTimeout={10000} // Increase timeout for debugging
/>
```

## Next Steps

- [**Font Loading Guide**](./font-loading.md) - Advanced font loading strategies
- [**Examples**](../recipes/examples.md) - More copy-paste examples
- [**API Reference**](../reference/api.md) - Complete API documentation
- [**Troubleshooting**](../troubleshooting.md) - Common issues and solutions
