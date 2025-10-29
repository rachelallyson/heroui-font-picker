# Examples and Recipes

Copy-paste code snippets for common use cases with the HeroUI Font Picker.

## Basic Usage

### Simple Font Picker

```tsx
import React, { useState } from 'react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function BasicExample() {
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

### With Form Integration

```tsx
import React, { useState } from 'react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function FormExample() {
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

## Advanced Configuration

### Custom Styling

```tsx
import React, { useState } from 'react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function StyledExample() {
  const [font, setFont] = useState('Inter');

  return (
    <FontPicker
      label="Choose Font"
      value={font}
      onSelectionChange={(key) => setFont(key as string)}
      showFontPreview={true}
      size="lg"
      variant="bordered"
      color="primary"
      className="w-full max-w-md"
      classNames={{
        base: "w-full",
        listboxWrapper: "max-h-64",
        listbox: "bg-white shadow-lg"
      }}
    />
  );
}
```

### Font Loading with Callbacks

```tsx
import React, { useState } from 'react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function LoadingExample() {
  const [font, setFont] = useState('Inter');
  const [isLoading, setIsLoading] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <div>
      <FontPicker
        label="Choose Font"
        value={font}
        onSelectionChange={(key) => setFont(key as string)}
        showFontPreview={true}
        loadAllVariants={false}
        onFontsLoaded={setFontsLoaded}
        fontsLoadedTimeout={5000}
      />
      {isLoading && <p>Loading font...</p>}
      {fontsLoaded && <p>Font ready!</p>}
    </div>
  );
}
```

## React Hook Form Integration

### Basic Form Integration

```tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function HookFormExample() {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      font: 'Inter'
    }
  });

  const onSubmit = (data) => {
    console.log('Selected font:', data.font);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="font"
        control={control}
        render={({ field, fieldState }) => (
          <FontPicker
            label="Choose Font"
            value={field.value}
            onSelectionChange={field.onChange}
            error={fieldState.error?.message}
            showFontPreview={true}
            isRequired
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Advanced Form with Validation

```tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function ValidationExample() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      primaryFont: 'Inter',
      secondaryFont: 'Roboto'
    }
  });

  const onSubmit = (data) => {
    console.log('Fonts:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        name="primaryFont"
        control={control}
        rules={{ required: 'Primary font is required' }}
        render={({ field, fieldState }) => (
          <FontPicker
            label="Primary Font"
            description="Main font for your design"
            value={field.value}
            onSelectionChange={field.onChange}
            error={fieldState.error?.message}
            showFontPreview={true}
            isRequired
          />
        )}
      />
      
      <Controller
        name="secondaryFont"
        control={control}
        render={({ field, fieldState }) => (
          <FontPicker
            label="Secondary Font"
            description="Accent font for your design"
            value={field.value}
            onSelectionChange={field.onChange}
            error={fieldState.error?.message}
            showFontPreview={true}
          />
        )}
      />
      
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Save Fonts
      </button>
    </form>
  );
}
```

## State Management

### With useState

```tsx
import React, { useState, useEffect } from 'react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function StateExample() {
  const [font, setFont] = useState('Inter');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Apply font to document
    document.body.style.fontFamily = font;
  }, [font]);

  const handleFontChange = (key) => {
    setFont(key as string);
    setIsLoading(true);
    
    // Simulate font loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <FontPicker
        label="Choose Font"
        value={font}
        onSelectionChange={handleFontChange}
        showFontPreview={true}
      />
      {isLoading && <p>Loading font...</p>}
    </div>
  );
}
```

### With useReducer

```tsx
import React, { useReducer } from 'react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

const fontReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FONT':
      return { ...state, font: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_LOADED':
      return { ...state, fontsLoaded: action.payload };
    default:
      return state;
  }
};

function ReducerExample() {
  const [state, dispatch] = useReducer(fontReducer, {
    font: 'Inter',
    isLoading: false,
    fontsLoaded: false
  });

  return (
    <div>
      <FontPicker
        label="Choose Font"
        value={state.font}
        onSelectionChange={(key) => dispatch({ type: 'SET_FONT', payload: key })}
        showFontPreview={true}
        onFontsLoaded={(loaded) => dispatch({ type: 'SET_LOADED', payload: loaded })}
      />
      {state.isLoading && <p>Loading...</p>}
      {state.fontsLoaded && <p>Font ready!</p>}
    </div>
  );
}
```

## Custom Font Loading

### Manual Font Loading

```tsx
import React, { useState } from 'react';
import { loadGoogleFont, checkFontLoaded, getFourVariants } from '@rachelallyson/heroui-font-picker';

function ManualLoadingExample() {
  const [font, setFont] = useState('Inter');
  const [isLoading, setIsLoading] = useState(false);

  const handleFontChange = async (fontName) => {
    setFont(fontName);
    setIsLoading(true);
    
    try {
      // Load font with 4 essential variants
      const font = { variants: ['0,300', '0,400', '0,500', '0,600', '0,700', '1,300', '1,400'] };
      const essentialVariants = getFourVariants(font.variants);
      loadGoogleFont(fontName, essentialVariants);
      
      // Check if font is loaded
      const loaded = await checkFontLoaded(fontName, 5000);
      if (loaded) {
        console.log('Font loaded successfully');
      } else {
        console.warn('Font loading failed or timed out');
      }
    } catch (error) {
      console.error('Font loading error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <FontPicker
        label="Choose Font"
        value={font}
        onSelectionChange={handleFontChange}
        showFontPreview={true}
      />
      {isLoading && <p>Loading font...</p>}
    </div>
  );
}
```

### Batch Font Loading

```tsx
import React, { useState, useCallback } from 'react';
import { loadGoogleFont, checkFontLoaded } from '@rachelallyson/heroui-font-picker';

function BatchLoadingExample() {
  const [fonts, setFonts] = useState(['Inter', 'Roboto', 'Open Sans']);
  const [loading, setLoading] = useState(false);

  const loadAllFonts = useCallback(async () => {
    setLoading(true);
    
    try {
      // Load all fonts in parallel
      const loadPromises = fonts.map(async (font) => {
        loadGoogleFont(font, ['400', '700']);
        return await checkFontLoaded(font, 5000);
      });
      
      const results = await Promise.all(loadPromises);
      console.log('Font loading results:', results);
    } catch (error) {
      console.error('Batch loading error:', error);
    } finally {
      setLoading(false);
    }
  }, [fonts]);

  return (
    <div>
      <button onClick={loadAllFonts} disabled={loading}>
        {loading ? 'Loading...' : 'Load All Fonts'}
      </button>
      <p>Fonts: {fonts.join(', ')}</p>
    </div>
  );
}
```

## Error Handling

### Error Boundary

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

### Retry Logic

```tsx
import React, { useState, useCallback } from 'react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function RetryExample() {
  const [font, setFont] = useState('Inter');
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = useCallback(() => {
    setIsRetrying(true);
    setRetryCount(prev => prev + 1);
    
    // Reset and try again
    setTimeout(() => {
      setIsRetrying(false);
    }, 1000);
  }, []);

  return (
    <div>
      <FontPicker
        key={retryCount} // Force re-render on retry
        label="Choose Font"
        value={font}
        onSelectionChange={setFont}
        showFontPreview={true}
      />
      {isRetrying && <p>Retrying...</p>}
      <button onClick={handleRetry}>Retry</button>
    </div>
  );
}
```

## Performance Optimization

### Lazy Loading

```tsx
import React, { useState, useCallback, Suspense } from 'react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

const LazyFontPicker = React.lazy(() => 
  import('@rachelallyson/heroui-font-picker').then(module => ({
    default: module.FontPicker
  }))
);

function LazyExample() {
  const [font, setFont] = useState('Inter');
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div>
      <button onClick={() => setShowPicker(true)}>
        Show Font Picker
      </button>
      
      {showPicker && (
        <Suspense fallback={<div>Loading font picker...</div>}>
          <LazyFontPicker
            label="Choose Font"
            value={font}
            onSelectionChange={setFont}
            showFontPreview={true}
          />
        </Suspense>
      )}
    </div>
  );
}
```

### Memoized Component

```tsx
import React, { useState, useMemo, useCallback } from 'react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function MemoizedExample() {
  const [font, setFont] = useState('Inter');
  const [otherState, setOtherState] = useState(0);

  const handleFontChange = useCallback((key) => {
    setFont(key as string);
  }, []);

  const fontPickerProps = useMemo(() => ({
    label: "Choose Font",
    value: font,
    onSelectionChange: handleFontChange,
    showFontPreview: true,
    size: "lg" as const,
    variant: "bordered" as const
  }), [font, handleFontChange]);

  return (
    <div>
      <FontPicker {...fontPickerProps} />
      <button onClick={() => setOtherState(prev => prev + 1)}>
        Other State: {otherState}
      </button>
    </div>
  );
}
```

## Testing Examples

### Basic Test

```tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function TestExample() {
  const [font, setFont] = useState('Inter');

  return (
    <FontPicker
      label="Choose Font"
      value={font}
      onSelectionChange={setFont}
      showFontPreview={true}
      data-testid="font-picker"
    />
  );
}

// Test
test('renders font picker', () => {
  render(<TestExample />);
  expect(screen.getByTestId('font-picker')).toBeInTheDocument();
});
```

### Integration Test

```tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { FontPicker } from '@rachelallyson/heroui-font-picker';

function IntegrationTest() {
  const [font, setFont] = useState('Inter');

  return (
    <div>
      <FontPicker
        label="Choose Font"
        value={font}
        onSelectionChange={setFont}
        showFontPreview={true}
        data-testid="font-picker"
      />
      <p data-testid="selected-font">{font}</p>
    </div>
  );
}

// Test
test('updates selected font', async () => {
  render(<IntegrationTest />);
  
  const picker = screen.getByTestId('font-picker');
  const selectedFont = screen.getByTestId('selected-font');
  
  expect(selectedFont).toHaveTextContent('Inter');
  
  // Simulate font selection
  fireEvent.click(picker);
  // ... test font selection logic
  
  await waitFor(() => {
    expect(selectedFont).toHaveTextContent('Roboto');
  });
});
```
