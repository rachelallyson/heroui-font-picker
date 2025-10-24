# LLM Context - HeroUI Font Picker

## Start Here

- [docs/index.md](./index.md) - Main documentation entry point
- [docs/concepts.md](./concepts.md) - Core architecture and mental models
- [docs/reference/api.md](./reference/api.md) - Complete API reference
- [src/index.ts](../src/index.ts) - Public exports and main entry point

## Purpose

This package provides a HeroUI-compatible font picker component with Google Fonts integration and sprite-based previews. It's a React component library with no CLI, no HTTP endpoints, and no configuration required.

## Invariants

- **Self-contained**: All assets (sprites, CSS) are bundled with the package
- **Dual package support**: Works with both `@heroui/react` and `@heroui/autocomplete`
- **Sprite-based previews**: Uses pre-rendered images for instant font previews
- **Intelligent font loading**: Only loads 4 essential variants by default
- **No external configuration**: Works out of the box across all React frameworks
- **Client-side only**: Fonts loaded from Google Fonts API, no server required

## Public Surface

- **Components**: `FontPicker` (main component)
- **Types**: `FontPickerProps`, `GoogleFont`, `FontPreview`, `FourFonts`
- **Utilities**: `getFourVariants`, `checkFontLoaded`, `loadGoogleFont`, `sanitizeFontName`, `createFontPreview`

## Common Tasks

- [Quick Start Guide](./guides/quickstart.md) - Basic setup and usage
- [Font Loading Guide](./guides/font-loading.md) - Font loading strategies
- [Examples](./recipes/examples.md) - Copy-paste code snippets

## Don'ts

- Don't invent configuration keys - this package is self-contained
- Don't deep import from internal modules - use public exports from `src/index.ts`
- Don't assume HeroUI package - use dynamic detection via `getHeroUIComponents()`
- Don't load all font variants by default - use `getFourVariants()` for optimization
- Don't manually import CSS - styles are automatically included
- Don't use server-side rendering for font loading - fonts are client-side only

## Key Implementation Details

- **Component Detection**: Uses `src/utils/heroUI.ts` for dynamic HeroUI component loading
- **Font Data**: Static JSON file at `src/font-preview/fontInfo.json` with 1,785+ fonts
- **Sprite System**: CSS classes in `src/font-preview/font-previews.css` for instant previews
- **Build System**: Rollup with dual package support (ESM/CJS) and TypeScript
- **Asset Management**: CSS files copied to `dist/` during build

## Error Patterns

- **Missing HeroUI**: "HeroUI components not found. Please install @heroui/react or @heroui/autocomplete"
- **Font Loading**: Graceful fallback if Google Fonts API is unavailable
- **Sprite Loading**: Fallback to text preview if sprites fail to load
- **TypeScript**: All components and utilities are fully typed

## Testing Strategy

- **Component Testing**: Test with both HeroUI package configurations
- **Font Loading**: Test with network throttling and offline scenarios
- **Sprite System**: Test preview rendering across different browsers
- **Framework Integration**: Test with Next.js, Vite, and CRA
