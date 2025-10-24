# Cursor Rules for HeroUI Font Picker

## Always Read First

Before generating any code, always read these files in order:

1. `docs/llm-context.md` - AI context and key information
2. `docs/index.md` - Main documentation entry point
3. `docs/reference/config.md` - Configuration reference
4. `src/index.ts` - Public exports and main entry point

## Core Principles

### Public API Surface

- **Always use public exports** from `src/index.ts`
- **Never deep import** from internal modules like `src/components/` or `src/utils/`
- **Prefer composition** over inheritance
- **Maintain backward compatibility** in public APIs

### HeroUI Integration

- **Support both HeroUI packages**: `@heroui/react` and `@heroui/autocomplete`
- **Use dynamic component detection** via `getHeroUIComponents()`
- **Never assume specific HeroUI package** is available
- **Follow HeroUI patterns** for component structure

### Font Loading Strategy

- **Previews use sprites** (instant, no network requests)
- **Selected fonts load from Google Fonts API** (on-demand)
- **Default to 4 essential variants** (not all variants)
- **Handle loading failures gracefully** with fallbacks

## Code Generation Rules

### Component Development

```typescript
// ✅ Good: Use public exports
import { FontPicker, loadGoogleFont } from '@rachelallyson/heroui-font-picker';

// ❌ Bad: Deep imports
import { FontPicker } from '@rachelallyson/heroui-font-picker/src/components/FontPicker';
```

### HeroUI Component Usage

```typescript
// ✅ Good: Use dynamic detection
const { Autocomplete, AutocompleteItem } = getHeroUIComponents();

// ❌ Bad: Direct imports
import { Autocomplete } from '@heroui/react';
```

### Font Loading

```typescript
// ✅ Good: Use utility functions
import { getFourVariants, loadGoogleFont } from '@rachelallyson/heroui-font-picker';

// ❌ Bad: Manual font loading
const link = document.createElement('link');
```

### Error Handling

```typescript
// ✅ Good: Graceful fallbacks
<FontPicker
  onFontsLoaded={(loaded) => {
    if (!loaded) {
      console.warn('Font loading failed, using fallback');
    }
  }}
/>

// ❌ Bad: No error handling
<FontPicker onFontsLoaded={() => {}} />
```

## Configuration Rules

### Never Invent Configuration

- **No environment variables** - package is self-contained
- **No configuration files** - works out of the box
- **No external setup** - all assets bundled
- **Only use documented props** from `docs/reference/config.md`

### Framework Integration

```typescript
// ✅ Good: Framework-agnostic
<FontPicker showFontPreview={true} />

// ❌ Bad: Framework-specific assumptions
<FontPicker nextjsOptimized={true} />
```

## Testing Rules

### Test Both HeroUI Configurations

```typescript
// Test with @heroui/react
npm install @heroui/react

// Test with @heroui/autocomplete
npm install @heroui/autocomplete
```

### Test Font Loading Scenarios

- **Online**: Normal font loading
- **Offline**: Sprite previews only
- **Slow network**: Timeout handling
- **API failures**: Graceful degradation

### Test Framework Integration

- **Next.js**: With and without custom config
- **Vite**: Default configuration
- **Create React App**: Default configuration

## Performance Rules

### Bundle Size Optimization

```typescript
// ✅ Good: 4-variant loading (default)
<FontPicker loadAllVariants={false} />

// ❌ Bad: Load all variants by default
<FontPicker loadAllVariants={true} />
```

### Memory Management

```typescript
// ✅ Good: Limit loaded fonts
const MAX_LOADED_FONTS = 10;

// ❌ Bad: Unlimited font loading
loadGoogleFont(fontName, allVariants);
```

### Sprite System

```typescript
// ✅ Good: Use sprite previews
<FontPicker showFontPreview={true} />

// ❌ Bad: Load fonts for previews
<FontPicker showFontPreview={false} />
```

## Security Rules

### External Resources

- **Only Google Fonts API**: `https://fonts.googleapis.com`
- **Only Google Fonts CDN**: `https://fonts.gstatic.com`
- **No other external resources**

### Content Security Policy

```html
<!-- Required CSP for font loading -->
<meta http-equiv="Content-Security-Policy" content="
  font-src https://fonts.googleapis.com https://fonts.gstatic.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
">
```

## Documentation Rules

### Link to Documentation

- **Always link to relevant docs** when explaining concepts
- **Use relative links** within the docs folder
- **Reference specific sections** with anchors

### Code Examples

```typescript
// ✅ Good: Complete, runnable examples
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

// ❌ Bad: Incomplete examples
<FontPicker />
```

## Common Mistakes to Avoid

### ❌ Don't Do These

1. **Deep imports from internal modules**
2. **Assume specific HeroUI package is available**
3. **Load all font variants by default**
4. **Ignore error handling**
5. **Create framework-specific code**
6. **Invent configuration options**
7. **Use server-side rendering for font loading**
8. **Ignore bundle size implications**
9. **Skip testing both HeroUI configurations**
10. **Forget about offline scenarios**

### ✅ Always Do These

1. **Use public exports from `src/index.ts`**
2. **Use dynamic HeroUI component detection**
3. **Default to 4-variant font loading**
4. **Handle all error scenarios**
5. **Write framework-agnostic code**
6. **Follow documented configuration**
7. **Use client-side font loading**
8. **Optimize for performance**
9. **Test all scenarios**
10. **Consider offline usage**

## When Uncertain

### Propose Tests First

```typescript
// ✅ Good: Propose test, then implement
// 1. Create test in __tests__/
// 2. Implement feature
// 3. Verify test passes

// ❌ Bad: Implement without testing
// Just write code and hope it works
```

### Follow Existing Patterns

```typescript
// ✅ Good: Follow established patterns
const { Autocomplete, AutocompleteItem } = getHeroUIComponents();

// ❌ Bad: Create new patterns
const MyCustomComponent = createCustomComponent();
```

### Ask for Clarification

If you're unsure about:

- **API design decisions**
- **Performance implications**
- **Framework compatibility**
- **Error handling strategies**

Ask for clarification before implementing.

## Quality Gates

### Before Submitting Code

- [ ] Uses public exports only
- [ ] Supports both HeroUI packages
- [ ] Handles error scenarios
- [ ] Optimizes for performance
- [ ] Includes proper TypeScript types
- [ ] Follows documented patterns
- [ ] Tests both configurations
- [ ] Works offline
- [ ] No breaking changes
- [ ] Documentation updated
