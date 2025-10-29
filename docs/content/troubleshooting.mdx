# Troubleshooting Guide

Common issues and solutions for the HeroUI Font Picker.

## Installation Issues

### HeroUI Components Not Found

**Symptom**: Error message "HeroUI components not found. Please install @heroui/react or @heroui/autocomplete"

**Cause**: Missing HeroUI dependencies

**Solution**:

```bash
# Install one of these packages
npm install @heroui/react react react-dom
# OR
npm install @heroui/autocomplete react react-dom
```

**Prevention**: Always install HeroUI dependencies before using the font picker.

### Package Not Found

**Symptom**: "Cannot resolve module '@rachelallyson/heroui-font-picker'"

**Cause**: Package not installed or incorrect package name

**Solution**:

```bash
npm install @rachelallyson/heroui-font-picker
```

**Verification**: Check that the package is in your `package.json` dependencies.

### Version Conflicts

**Symptom**: TypeScript errors or runtime errors related to HeroUI versions

**Cause**: Incompatible HeroUI versions

**Solution**:

```bash
# Check HeroUI version
npm list @heroui/react
npm list @heroui/autocomplete

# Update to compatible versions
npm install @heroui/react@latest
# OR
npm install @heroui/autocomplete@latest
```

## Font Loading Issues

### Fonts Not Loading

**Symptom**: Selected fonts don't appear or show as fallback fonts

**Cause**: Network issues, API rate limits, or invalid font names

**Solution**:

```tsx
// Check network connection
console.log('Network status:', navigator.onLine);

// Verify font name exists
import fontData from '@rachelallyson/heroui-font-picker/font-preview/fontInfo.json';
const fontExists = fontData.some(font => font.name === selectedFont);
console.log('Font exists:', fontExists);

// Add error handling
<FontPicker
  onFontsLoaded={(loaded) => {
    if (!loaded) {
      console.warn('Font loading failed, using fallback');
      document.body.style.fontFamily = 'system-ui, sans-serif';
    }
  }}
  fontsLoadedTimeout={10000} // Increase timeout
/>
```

**Debug Steps**:

1. Check browser network tab for failed requests
2. Verify Google Fonts API is accessible
3. Check console for CORS or CSP errors
4. Test with different font names

### Slow Font Loading

**Symptom**: Fonts take a long time to load

**Cause**: Network latency, large font files, or loading all variants

**Solution**:

```tsx
// Use 4-variant loading (default)
<FontPicker loadAllVariants={false} />

// Preload common fonts
useEffect(() => {
  const commonFonts = ['Inter', 'Roboto', 'Open Sans'];
  commonFonts.forEach(font => {
    loadGoogleFont(font, ['400', '700']);
  });
}, []);

// Increase timeout for slow connections
<FontPicker fontsLoadedTimeout={10000} />
```

### Font Loading Timeout

**Symptom**: Fonts never finish loading

**Cause**: Network issues or API rate limiting

**Solution**:

```tsx
// Implement retry logic
const loadFontWithRetry = async (fontName, variants, maxRetries = 3) => {
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
};
```

## Preview Issues

### Previews Not Showing

**Symptom**: Font previews don't appear in the dropdown

**Cause**: CSS files not loaded or sprite images missing

**Solution**:

```tsx
// Check if CSS is loaded
useEffect(() => {
  const checkCSS = () => {
    const link = document.querySelector('link[href*="font-previews.css"]');
    if (!link) {
      console.warn('Font preview CSS not loaded');
    }
  };
  checkCSS();
}, []);

// Disable previews if they fail
<FontPicker showFontPreview={false} />
```

**Debug Steps**:

1. Check browser dev tools for failed CSS requests
2. Verify sprite files are accessible
3. Check for CSP (Content Security Policy) issues
4. Test with different browsers

### Sprite Images Not Loading

**Symptom**: Preview placeholders show instead of font previews

**Cause**: Sprite files not accessible or CSP blocking

**Solution**:

```tsx
// Check sprite accessibility
const checkSprites = () => {
  const spriteUrls = [
    '/node_modules/@rachelallyson/heroui-font-picker/dist/sprite.1.svg',
    '/node_modules/@rachelallyson/heroui-font-picker/dist/sprite.2.svg'
  ];
  
  spriteUrls.forEach(url => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          console.warn(`Sprite not accessible: ${url}`);
        }
      })
      .catch(error => {
        console.error(`Sprite loading error: ${url}`, error);
      });
  });
};
```

### Next.js Sprite Issues

**Symptom**: Sprites work in development but not in production

**Cause**: Next.js not serving sprite files correctly

**Solution**:

```javascript
// next.config.js
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

## TypeScript Issues

### Type Errors

**Symptom**: TypeScript compilation errors

**Cause**: Missing type definitions or incorrect imports

**Solution**:

```tsx
// Correct imports
import { FontPicker, FontPickerProps } from '@rachelallyson/heroui-font-picker';

// Use proper typing
const props: FontPickerProps = {
  value: 'Inter',
  onSelectionChange: (key) => setFont(key as string),
  showFontPreview: true
};
```

### Missing Types

**Symptom**: "Cannot find module or its type declarations"

**Cause**: TypeScript not finding type definitions

**Solution**:

```bash
# Reinstall package
npm uninstall @rachelallyson/heroui-font-picker
npm install @rachelallyson/heroui-font-picker

# Check TypeScript version
npm list typescript
```

## Performance Issues

### Slow Rendering

**Symptom**: Font picker is slow to open or render

**Cause**: Large font list or inefficient rendering

**Solution**:

```tsx
// Use memoization
const MemoizedFontPicker = React.memo(FontPicker);

// Limit font list (if needed)
const limitedFonts = fonts.slice(0, 100); // Only show first 100 fonts
```

### Memory Issues

**Symptom**: Browser becomes slow or crashes

**Cause**: Too many fonts loaded or memory leaks

**Solution**:

```tsx
// Limit loaded fonts
const MAX_LOADED_FONTS = 10;
const [loadedFonts, setLoadedFonts] = useState([]);

const loadFont = (fontName) => {
  if (loadedFonts.length >= MAX_LOADED_FONTS) {
    // Remove oldest font
    const oldestFont = loadedFonts[0];
    const link = document.querySelector(`link[href*="${oldestFont}"]`);
    if (link) link.remove();
    
    setLoadedFonts(prev => prev.slice(1));
  }
  
  loadGoogleFont(fontName, ['400', '700']);
  setLoadedFonts(prev => [...prev, fontName]);
};
```

### Bundle Size Issues

**Symptom**: Large bundle size

**Cause**: Loading all font variants or unnecessary dependencies

**Solution**:

```tsx
// Use 4-variant loading (default)
<FontPicker loadAllVariants={false} />

// Use autocomplete-only package
npm install @rachelallyson/heroui-font-picker @heroui/autocomplete
```

## Framework-Specific Issues

### Next.js Issues

**Symptom**: Font picker doesn't work in Next.js

**Cause**: Server-side rendering or asset serving issues

**Solution**:

```tsx
// Use dynamic import for client-side only
import dynamic from 'next/dynamic';

const FontPicker = dynamic(
  () => import('@rachelallyson/heroui-font-picker').then(mod => ({ default: mod.FontPicker })),
  { ssr: false }
);
```

### Vite Issues

**Symptom**: Build errors or runtime issues in Vite

**Cause**: Module resolution or asset handling

**Solution**:

```javascript
// vite.config.js
export default {
  optimizeDeps: {
    include: ['@rachelallyson/heroui-font-picker']
  }
}
```

### Create React App Issues

**Symptom**: Font picker doesn't work in CRA

**Cause**: Webpack configuration or asset handling

**Solution**:

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

## Browser Compatibility

### Older Browsers

**Symptom**: Font picker doesn't work in older browsers

**Cause**: Missing modern browser features

**Solution**:

```tsx
// Feature detection
const supportsFontLoading = 'fonts' in document && 'check' in document.fonts;
const supportsCSSSprites = CSS.supports('background-image', 'url()');

if (!supportsFontLoading || !supportsCSSSprites) {
  // Show fallback UI
  return <div>Font picker not supported in this browser</div>;
}
```

### Mobile Browsers

**Symptom**: Issues on mobile devices

**Cause**: Touch events or viewport issues

**Solution**:

```tsx
// Add mobile-specific props
<FontPicker
  size="lg" // Larger touch targets
  variant="bordered" // Better visibility
  className="touch-manipulation" // Better touch handling
/>
```

## Debugging

### Enable Debug Mode

```tsx
// Add debug logging
<FontPicker
  onFontsLoaded={(loaded) => {
    console.log('Font loading result:', loaded);
  }}
  onSelectionChange={(key) => {
    console.log('Font selected:', key);
  }}
  fontsLoadedTimeout={10000} // Increase for debugging
/>
```

### Performance Monitoring

```tsx
// Monitor font loading performance
const [metrics, setMetrics] = useState([]);

const loadFontWithMetrics = async (fontName, variants) => {
  const startTime = performance.now();
  
  try {
    loadGoogleFont(fontName, variants);
    const loaded = await checkFontLoaded(fontName, 5000);
    
    const loadTime = performance.now() - startTime;
    setMetrics(prev => [...prev, { fontName, loadTime, success: loaded }]);
    
    return loaded;
  } catch (error) {
    const loadTime = performance.now() - startTime;
    setMetrics(prev => [...prev, { fontName, loadTime, success: false, error }]);
    return false;
  }
};
```

### Common Debug Commands

```bash
# Check package installation
npm list @rachelallyson/heroui-font-picker

# Check HeroUI dependencies
npm list @heroui/react @heroui/autocomplete

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for version conflicts
npm audit
```

## Getting Help

### Check Documentation

1. [Quick Start Guide](./guides/quickstart.md)
2. [API Reference](./reference/api.md)
3. [Examples](./recipes/examples.md)

### Report Issues

1. Check existing issues on GitHub
2. Create a minimal reproduction
3. Include browser version and error messages
4. Provide steps to reproduce

### Community Support

1. GitHub Discussions
2. Stack Overflow (tag: `heroui-font-picker`)
3. Discord/Community channels
