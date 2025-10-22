# Dual Package Support

This package supports both `@heroui/react` and `@heroui/autocomplete` as peer dependencies, allowing users to choose the most appropriate option for their project.

## How It Works

The package uses dynamic component detection in `src/utils/heroUI.ts`:

1. **First Priority**: Tries to import from `@heroui/autocomplete` (more specific, smaller bundle)
2. **Fallback**: If autocomplete package isn't available, falls back to `@heroui/react` (full package)
3. **Error Handling**: If neither package is available, throws a clear error message

## Installation Options

### Option 1: Full HeroUI Package

```bash
npm install @rachel-allyson/heroui-font-picker @heroui/react react react-dom
```

### Option 2: Autocomplete-Only Package

```bash
npm install @rachel-allyson/heroui-font-picker @heroui/autocomplete react react-dom
```

### Option 3: Individual Packages

```bash
npm install @rachel-allyson/heroui-font-picker @heroui/autocomplete @heroui/system react react-dom
```

## Benefits

- **Flexibility**: Users can choose based on their project needs
- **Bundle Size**: Autocomplete-only users get smaller bundles
- **Compatibility**: Works with existing HeroUI setups
- **Automatic Detection**: No configuration needed

## Technical Implementation

The component detection logic:

```typescript
// Try @heroui/autocomplete first (preferred for smaller bundles)
try {
  const autocompleteModule = require('@heroui/autocomplete');
  // Use autocomplete components
} catch {
  // Fallback to @heroui/react
  try {
    const reactModule = require('@heroui/react');
    // Use react components
  } catch (error) {
    throw new Error('HeroUI components not found...');
  }
}
```

## Testing Both Scenarios

To test both scenarios in your project:

1. **Test with @heroui/autocomplete only**:

   ```bash
   npm install @heroui/autocomplete
   # Remove @heroui/react if installed
   ```

2. **Test with @heroui/react only**:

   ```bash
   npm install @heroui/react
   # Remove @heroui/autocomplete if installed
   ```

The font picker will automatically detect and use the available package.
