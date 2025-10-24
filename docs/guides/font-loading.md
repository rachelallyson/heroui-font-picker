# Font Loading Guide

Understanding and optimizing font loading strategies in the HeroUI Font Picker.

## Loading Strategy Overview

The font picker uses a two-phase loading approach:

1. **Preview Phase** - Instant sprite-based previews
2. **Selection Phase** - On-demand Google Fonts API loading

## Intelligent Variant Selection

### Default Behavior (4 Variants)

By default, the font picker loads only 4 essential variants:

```typescript
// Input: ['0,300', '0,400', '0,500', '0,600', '0,700', '1,300', '1,400']
// Output: ['400', '700', '400italic', '700italic']
```

### Load All Variants

To load all available variants:

```tsx
<FontPicker
  loadAllVariants={true}
  // ... other props
/>
```

**Warning**: This can significantly increase loading time and bundle size.

## Font Loading Detection

### Basic Detection

```tsx
import { checkFontLoaded } from '@rachelallyson/heroui-font-picker';

const isLoaded = await checkFontLoaded('Inter', 5000);
console.log('Font loaded:', isLoaded);
```

### With Component

```tsx
<FontPicker
  onFontsLoaded={(loaded) => {
    if (loaded) {
      console.log('Font is ready to use');
    } else {
      console.log('Font loading failed or timed out');
    }
  }}
  fontsLoadedTimeout={5000}
/>
```

## Manual Font Loading

### Load Specific Font

```tsx
import { loadGoogleFont, getFourVariants } from '@rachelallyson/heroui-font-picker';

// Load font with all variants
loadGoogleFont('Inter', ['0,300', '0,400', '0,500', '0,600', '0,700']);

// Load font with intelligent 4-variant selection
const font = { variants: ['0,300', '0,400', '0,500', '0,600', '0,700', '1,300', '1,400'] };
const essentialVariants = getFourVariants(font.variants);
loadGoogleFont('Inter', essentialVariants);
```

### Preload Fonts

```tsx
import { loadGoogleFont } from '@rachelallyson/heroui-font-picker';

// Preload common fonts
useEffect(() => {
  const commonFonts = ['Inter', 'Roboto', 'Open Sans', 'Lato'];
  commonFonts.forEach(font => {
    loadGoogleFont(font, ['400', '700']);
  });
}, []);
```

## Performance Optimization

### Lazy Loading

```tsx
import { useState, useCallback } from 'react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function LazyFontPicker() {
  const [font, setFont] = useState('Inter');
  const [isLoaded, setIsLoaded] = useState(false);

  const handleFontChange = useCallback(async (fontName) => {
    setFont(fontName);
    setIsLoaded(false);
    
    // Load font and wait for completion
    const loaded = await checkFontLoaded(fontName, 5000);
    setIsLoaded(loaded);
  }, []);

  return (
    <div>
      <FontPicker
        value={font}
        onSelectionChange={handleFontChange}
        showFontPreview={true}
      />
      {!isLoaded && <p>Loading font...</p>}
    </div>
  );
}
```

### Batch Loading

```tsx
import { loadGoogleFont } from '@rachelallyson/heroui-font-picker';

function BatchLoader() {
  const [fonts, setFonts] = useState(['Inter', 'Roboto', 'Open Sans']);
  
  const loadAllFonts = useCallback(() => {
    fonts.forEach(font => {
      loadGoogleFont(font, ['400', '700']);
    });
  }, [fonts]);

  return (
    <button onClick={loadAllFonts}>
      Load All Fonts
    </button>
  );
}
```

## Error Handling

### Network Failures

```tsx
<FontPicker
  onFontsLoaded={(loaded) => {
    if (!loaded) {
      console.warn('Font loading failed, using fallback');
      // Apply fallback font
      document.body.style.fontFamily = 'system-ui, sans-serif';
    }
  }}
  fontsLoadedTimeout={3000}
/>
```

### Retry Logic

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

## Advanced Patterns

### Font Loading Queue

```tsx
import { useState, useCallback } from 'react';
import { loadGoogleFont, checkFontLoaded } from '@rachelallyson/heroui-font-picker';

function FontQueue() {
  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useState(false);

  const addToQueue = useCallback((fontName) => {
    setQueue(prev => [...prev, fontName]);
  }, []);

  const processQueue = useCallback(async () => {
    if (loading || queue.length === 0) return;
    
    setLoading(true);
    const fontName = queue[0];
    
    try {
      loadGoogleFont(fontName, ['400', '700']);
      await checkFontLoaded(fontName, 5000);
      setQueue(prev => prev.slice(1));
    } catch (error) {
      console.error('Font loading failed:', error);
    } finally {
      setLoading(false);
    }
  }, [queue, loading]);

  return (
    <div>
      <button onClick={addToQueue}>Add Font to Queue</button>
      <button onClick={processQueue}>Process Queue</button>
      <p>Queue: {queue.length} fonts</p>
    </div>
  );
}
```

### Font Loading Analytics

```tsx
import { loadGoogleFont, checkFontLoaded } from '@rachelallyson/heroui-font-picker';

function FontAnalytics() {
  const [metrics, setMetrics] = useState({
    loaded: 0,
    failed: 0,
    totalTime: 0
  });

  const loadFontWithMetrics = useCallback(async (fontName) => {
    const startTime = Date.now();
    
    try {
      loadGoogleFont(fontName, ['400', '700']);
      const loaded = await checkFontLoaded(fontName, 5000);
      
      const loadTime = Date.now() - startTime;
      setMetrics(prev => ({
        ...prev,
        loaded: prev.loaded + 1,
        totalTime: prev.totalTime + loadTime
      }));
      
      return loaded;
    } catch (error) {
      setMetrics(prev => ({
        ...prev,
        failed: prev.failed + 1
      }));
      return false;
    }
  }, []);

  return (
    <div>
      <p>Loaded: {metrics.loaded}</p>
      <p>Failed: {metrics.failed}</p>
      <p>Average Time: {metrics.totalTime / metrics.loaded}ms</p>
    </div>
  );
}
```

## Best Practices

### 1. Use 4-Variant Loading by Default

```tsx
// Good: Efficient loading
<FontPicker loadAllVariants={false} />

// Avoid: Unless you need all variants
<FontPicker loadAllVariants={true} />
```

### 2. Set Appropriate Timeouts

```tsx
// Good: Reasonable timeout
<FontPicker fontsLoadedTimeout={5000} />

// Avoid: Too short or too long
<FontPicker fontsLoadedTimeout={500} />  // Too short
<FontPicker fontsLoadedTimeout={30000} /> // Too long
```

### 3. Handle Loading States

```tsx
// Good: Show loading state
const [isLoading, setIsLoading] = useState(false);

<FontPicker
  onFontsLoaded={setIsLoading}
  // ... other props
/>
{isLoading && <p>Loading font...</p>}
```

### 4. Preload Critical Fonts

```tsx
// Good: Preload fonts you know you'll need
useEffect(() => {
  loadGoogleFont('Inter', ['400', '700']);
  loadGoogleFont('Roboto', ['400', '700']);
}, []);
```

## Troubleshooting

### Font Not Loading

1. **Check Network**: Ensure Google Fonts API is accessible
2. **Check Font Name**: Verify the font exists in Google Fonts
3. **Check Variants**: Ensure variants are valid
4. **Check Timeout**: Increase `fontsLoadedTimeout` if needed

### Slow Loading

1. **Reduce Variants**: Use `getFourVariants()` instead of all variants
2. **Preload**: Load fonts before they're needed
3. **Cache**: Ensure fonts are cached by the browser

### Memory Issues

1. **Limit Fonts**: Don't load too many fonts at once
2. **Cleanup**: Remove unused font links
3. **Monitor**: Use browser dev tools to monitor memory usage
