# Core Concepts

Understanding the mental models and architecture of the HeroUI Font Picker.

## Architecture Overview

The font picker is built on three core systems:

1. **Sprite-based Preview System** - Instant font previews using pre-rendered images
2. **Intelligent Font Loading** - Optimized Google Fonts API integration
3. **Dual Package Support** - Flexible HeroUI component detection

## Sprite System

### How It Works

The font picker uses pre-rendered sprite images for instant font previews:

- **1,785+ Google Fonts** pre-rendered as CSS sprites
- **Zero loading time** for previews (sprites are bundled with package)
- **30MB sprite files** for complete coverage
- **CSS positioning** for efficient rendering

### Sprite Files

```
src/font-preview/
├── sprite.1.svg    # Font sprites 1-200
├── sprite.2.svg    # Font sprites 201-400
├── ...
└── sprite.9.svg    # Font sprites 1600-1785
```

### CSS Classes

Each font gets a CSS class like `font-preview-inter` that positions the sprite:

```css
.font-preview-inter {
  background-image: url('sprite.1.svg');
  background-position: -0px -0px;
  background-size: 2000px 2000px;
}
```

## Font Loading Strategy

### Two-Phase Loading

1. **Preview Phase** (Instant)
   - Uses sprite images for immediate visual feedback
   - No network requests required
   - Works offline

2. **Selection Phase** (On-demand)
   - Loads actual font from Google Fonts API
   - Only loads when user selects a font
   - Intelligent variant selection (4 variants max)

### Intelligent Variant Selection

The `getFourVariants()` function selects the most useful variants:

```typescript
// Input: ['0,300', '0,400', '0,500', '0,600', '0,700', '1,300', '1,400']
// Output: ['400', '700', '400italic', '700italic']
```

**Selection Logic:**

- **Regular**: Closest to 400 weight
- **Bold**: Closest to 700 weight  
- **Italic**: Closest to 400 weight
- **Bold Italic**: Closest to 700 weight

## Dual Package Support

### Component Detection

The package automatically detects available HeroUI components:

```typescript
// src/utils/heroUI.ts
export function getHeroUIComponents() {
  // Try @heroui/autocomplete first (smaller bundle)
  try {
    return require('@heroui/autocomplete');
  } catch {
    // Fallback to @heroui/react
    try {
      return require('@heroui/react');
    } catch (error) {
      throw new Error('HeroUI components not found...');
    }
  }
}
```

### Installation Options

**Option 1: Full HeroUI Package**

```bash
npm install @rachelallyson/heroui-font-picker @heroui/react
```

**Option 2: Autocomplete-Only Package**

```bash
npm install @rachelallyson/heroui-font-picker @heroui/autocomplete
```

## Data Model

### GoogleFont Interface

```typescript
interface GoogleFont {
  name: string;        // "Inter"
  category: string;   // "sans-serif"
  sane: string;       // "inter"
  variants: string[]; // ["0,300", "0,400", "0,500", "0,600", "0,700"]
  subsets: string[];  // ["latin", "latin-ext"]
}
```

### Font Data Source

Static JSON file at `src/font-preview/fontInfo.json`:

- **1,785+ fonts** from Google Fonts API
- **Cached locally** for offline usage
- **No API calls** for font list

## Component Lifecycle

### 1. Initialization

- Load static font data from JSON
- Initialize sprite CSS classes
- Set up HeroUI component detection

### 2. User Interaction

- User opens dropdown → Show sprite previews
- User types → Filter fonts by name
- User selects → Load actual font

### 3. Font Loading

- Create `<link>` element for Google Fonts
- Load 4 essential variants
- Detect when font is loaded
- Update UI state

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

## Error Handling

### Font Loading Failures

- **Network Issues**: Graceful fallback to system fonts
- **API Rate Limits**: Retry with exponential backoff
- **Invalid Fonts**: Skip and continue

### Sprite Loading Failures

- **Missing Sprites**: Fallback to text preview
- **CSS Loading**: Graceful degradation
- **Browser Support**: Feature detection

### Component Detection Failures

- **Missing HeroUI**: Clear error message
- **Version Mismatch**: Compatibility warnings
- **Build Issues**: Development vs production

## Framework Integration

### Next.js

```javascript
// next.config.js
const nextConfig = {
  transpilePackages: ['@rachelallyson/heroui-font-picker'],
  async rewrites() {
    return [{
      source: '/sprite.:path*',
      destination: '/node_modules/@rachelallyson/heroui-font-picker/dist/sprite.:path*'
    }];
  }
}
```

### Vite

Works out of the box - no configuration needed.

### Create React App

Works out of the box - no configuration needed.

## Security Considerations

### External Resources

- **Google Fonts API**: HTTPS only
- **Sprite Images**: Bundled locally
- **No External Scripts**: All code is local

### Content Security Policy

- **Font Loading**: Requires `font-src: https://fonts.googleapis.com`
- **Images**: Local sprites, no external images
- **Scripts**: No external scripts

## Browser Compatibility

### Required Features

- **CSS Sprites**: Background positioning
- **Font Loading API**: `document.fonts.check()`
- **ES6 Modules**: Import/export syntax
- **React 16.8+**: Hooks support

### Fallbacks

- **Older Browsers**: Text-based previews
- **No Font Loading API**: Timeout-based detection
- **No CSS Sprites**: Inline styles
