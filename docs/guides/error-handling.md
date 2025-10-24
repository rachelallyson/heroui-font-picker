# Error Handling Guide

Comprehensive guide to handling errors and edge cases in the HeroUI Font Picker.

## Error Types

### 1. Component Detection Errors

**Error**: "HeroUI components not found. Please install @heroui/react or @heroui/autocomplete"

**Cause**: Missing HeroUI dependencies

**Solution**:

```bash
# Install one of these
npm install @heroui/react
# OR
npm install @heroui/autocomplete
```

**Prevention**:

```tsx
// Check dependencies before using
try {
  const { FontPicker } = require('@rachelallyson/heroui-font-picker');
  // Use FontPicker
} catch (error) {
  console.error('HeroUI Font Picker not available:', error.message);
}
```

### 2. Font Loading Errors

**Error**: Font fails to load from Google Fonts API

**Cause**: Network issues, API rate limits, or invalid font names

**Solution**:

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

**Retry Logic**:

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

### 3. Sprite Loading Errors

**Error**: Font previews not showing

**Cause**: CSS files not loaded or sprite images missing

**Solution**:

```tsx
// Check if CSS is loaded
const checkCSSLoaded = () => {
  const link = document.querySelector('link[href*="font-previews.css"]');
  return !!link;
};

// Fallback to text preview
<FontPicker
  showFontPreview={false} // Disable sprites if they fail
  // ... other props
/>
```

### 4. TypeScript Errors

**Error**: Type errors with component props

**Cause**: Missing type definitions or incorrect prop types

**Solution**:

```tsx
import { FontPicker, FontPickerProps } from '@rachelallyson/heroui-font-picker';

// Use proper typing
const props: FontPickerProps = {
  value: 'Inter',
  onSelectionChange: (key) => setFont(key as string),
  showFontPreview: true
};
```

## Error Boundaries

### React Error Boundary

```tsx
import React from 'react';

class FontPickerErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('FontPicker Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border border-red-300 rounded-md bg-red-50">
          <h3 className="text-red-800 font-medium">Font Picker Error</h3>
          <p className="text-red-600 mt-1">
            Something went wrong with the font picker. Please refresh the page.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 px-3 py-1 bg-red-600 text-white rounded text-sm"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
<FontPickerErrorBoundary>
  <FontPicker {...props} />
</FontPickerErrorBoundary>
```

### Functional Error Boundary

```tsx
import { useState, useEffect } from 'react';

function FontPickerWithErrorHandling({ children, fallback }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error) => {
      if (error.message.includes('FontPicker')) {
        setHasError(true);
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return fallback || <div>Font picker unavailable</div>;
  }

  return children;
}
```

## Network Error Handling

### Offline Detection

```tsx
import { useState, useEffect } from 'react';

function OfflineFontPicker() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div>
      {!isOnline && (
        <div className="p-2 bg-yellow-100 border border-yellow-300 rounded">
          Offline mode: Font previews only
        </div>
      )}
      <FontPicker
        showFontPreview={true}
        // Font loading will fail in offline mode, but previews work
      />
    </div>
  );
}
```

### API Rate Limiting

```tsx
import { loadGoogleFont } from '@rachelallyson/heroui-font-picker';

class FontLoader {
  constructor() {
    this.queue = [];
    this.loading = false;
    this.rateLimit = 1000; // 1 second between requests
  }

  async loadFont(fontName, variants) {
    return new Promise((resolve, reject) => {
      this.queue.push({ fontName, variants, resolve, reject });
      this.processQueue();
    });
  }

  async processQueue() {
    if (this.loading || this.queue.length === 0) return;

    this.loading = true;
    const { fontName, variants, resolve, reject } = this.queue.shift();

    try {
      loadGoogleFont(fontName, variants);
      await new Promise(resolve => setTimeout(resolve, this.rateLimit));
      resolve();
    } catch (error) {
      reject(error);
    } finally {
      this.loading = false;
      this.processQueue();
    }
  }
}
```

## Validation and Sanitization

### Font Name Validation

```tsx
import { sanitizeFontName } from '@rachelallyson/heroui-font-picker';

function validateFontName(fontName) {
  if (!fontName || typeof fontName !== 'string') {
    throw new Error('Font name must be a non-empty string');
  }

  if (fontName.length > 100) {
    throw new Error('Font name too long');
  }

  // Check for valid characters
  if (!/^[a-zA-Z0-9\s\-_]+$/.test(fontName)) {
    throw new Error('Font name contains invalid characters');
  }

  return sanitizeFontName(fontName);
}
```

### Variant Validation

```tsx
function validateVariants(variants) {
  if (!Array.isArray(variants)) {
    throw new Error('Variants must be an array');
  }

  const validVariants = variants.filter(variant => {
    // Check format: "0,400" or "1,400"
    return /^[01],\d+$/.test(variant);
  });

  if (validVariants.length === 0) {
    throw new Error('No valid variants provided');
  }

  return validVariants;
}
```

## Debugging

### Debug Mode

```tsx
<FontPicker
  onFontsLoaded={(loaded) => {
    console.log('Font loading result:', loaded);
  }}
  fontsLoadedTimeout={10000} // Increase for debugging
  // Add debug logging
  onSelectionChange={(key) => {
    console.log('Font selected:', key);
  }}
/>
```

### Performance Monitoring

```tsx
import { loadGoogleFont, checkFontLoaded } from '@rachelallyson/heroui-font-picker';

function FontPerformanceMonitor() {
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

  return (
    <div>
      <h3>Font Loading Metrics</h3>
      {metrics.map((metric, index) => (
        <div key={index}>
          {metric.fontName}: {metric.loadTime.toFixed(2)}ms ({metric.success ? 'success' : 'failed'})
        </div>
      ))}
    </div>
  );
}
```

## Common Error Scenarios

### 1. Missing Dependencies

**Symptom**: "Cannot resolve module '@heroui/react'"

**Solution**:

```bash
npm install @heroui/react react react-dom
```

### 2. Font Not Found

**Symptom**: Font previews show but font doesn't load

**Solution**:

```tsx
// Check if font exists in the data
import fontData from '@rachelallyson/heroui-font-picker/font-preview/fontInfo.json';

const fontExists = fontData.some(font => font.name === selectedFont);
if (!fontExists) {
  console.warn('Font not found in available fonts');
}
```

### 3. CSS Not Loading

**Symptom**: Previews not showing

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
```

### 4. Memory Issues

**Symptom**: Browser becomes slow or crashes

**Solution**:

```tsx
// Limit number of loaded fonts
const MAX_LOADED_FONTS = 10;
const [loadedFonts, setLoadedFonts] = useState([]);

const loadFont = (fontName) => {
  if (loadedFonts.length >= MAX_LOADED_FONTS) {
    // Remove oldest font
    const oldestFont = loadedFonts[0];
    // Remove font link from document
    const link = document.querySelector(`link[href*="${oldestFont}"]`);
    if (link) link.remove();
    
    setLoadedFonts(prev => prev.slice(1));
  }
  
  // Load new font
  loadGoogleFont(fontName, ['400', '700']);
  setLoadedFonts(prev => [...prev, fontName]);
};
```

## Error Recovery

### Graceful Degradation

```tsx
function ResilientFontPicker() {
  const [fallbackMode, setFallbackMode] = useState(false);

  const handleError = (error) => {
    console.error('Font picker error:', error);
    setFallbackMode(true);
  };

  if (fallbackMode) {
    return (
      <select onChange={(e) => setFont(e.target.value)}>
        <option value="Inter">Inter</option>
        <option value="Roboto">Roboto</option>
        <option value="Open Sans">Open Sans</option>
      </select>
    );
  }

  return (
    <FontPicker
      onError={handleError}
      // ... other props
    />
  );
}
```

### Retry Mechanism

```tsx
function RetryFontPicker() {
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = () => {
    setIsRetrying(true);
    setRetryCount(prev => prev + 1);
    
    // Reset and try again
    setTimeout(() => {
      setIsRetrying(false);
    }, 1000);
  };

  return (
    <div>
      <FontPicker
        key={retryCount} // Force re-render on retry
        // ... props
      />
      {isRetrying && <p>Retrying...</p>}
      <button onClick={handleRetry}>Retry</button>
    </div>
  );
}
```
