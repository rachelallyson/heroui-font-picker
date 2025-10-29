# Repository Rules

## Documentation and Code Generation

- **Always read these files before generating code:**
  1. `docs/content/llm-context.mdx` - AI assistant guide
  2. `docs/content/index.mdx` - Main documentation entry point
  3. `docs/content/concepts.mdx` - Core architecture and mental models
  4. `docs/content/reference/config.mdx` - Configuration reference (this package has no config)
  5. `src/index.ts` - Public exports and main entry point

## Public API

- **Prefer public exports from `src/index.ts`** - Do not deep import from internal modules
- **Avoid deep imports** - Use `@rachelallyson/heroui-font-picker` public API only
- **Don't invent APIs** - Only use documented exports: `FontPicker`, utility functions, and types

## Configuration

- **Never invent configuration keys** - This package is self-contained with zero configuration
- **No environment variables** - All configuration is via component props
- **No config files** - Everything works out of the box

## HeroUI Integration

- **Dual package support** - Must work with both `@heroui/react` and `@heroui/autocomplete`
- **Dynamic detection** - Use `getHeroUIComponents()` from `src/utils/heroUI.ts`
- **Don't assume package** - Support both installation options

## Font Loading

- **Intelligent loading** - Default to 4-variant optimization via `getFourVariants()`
- **Sprite previews** - Use sprite system for instant previews, not actual font loading
- **Selected fonts only** - Load actual fonts from Google Fonts API only when selected
- **Don't load all variants** - Use `loadAllVariants` prop for full variant loading

## Architecture

- **Sprite system** - Pre-rendered CSS sprites for font previews (no loading time)
- **Self-contained** - All assets bundled (sprites, CSS, font data)
- **Client-side only** - No server-side rendering for font loading
- **TypeScript strict** - All code must be properly typed, avoid `any`

## Testing

- **When uncertain, propose tests first** - Create tests in `tests/` directory before implementing
- **Test both HeroUI packages** - Ensure compatibility with both `@heroui/react` and `@heroui/autocomplete`
- **Test font loading** - Include network throttling and offline scenarios
- **Test sprite system** - Verify preview rendering across browsers

## Documentation

- **Documentation source is `docs/content/`** - All `.mdx` files are committed to git
- **Documentation site infrastructure is `docs/`** - Nextra config, app router files
- **Edit `.mdx` files directly** - No conversion needed, Nextra reads them natively
- **TypeDoc output** - Auto-generated API docs go to `docs/content/api/`

## Code Style

- **TypeScript strict mode** - No `any` types, proper typing required
- **React functional components** - Use hooks, avoid class components
- **HeroUI patterns** - Follow HeroUI component design patterns
- **Performance** - Optimize for 1,785+ fonts in dropdown

## Error Handling

- **Missing HeroUI** - Clear error message: "HeroUI components not found. Please install @heroui/react or @heroui/autocomplete"
- **Font loading** - Graceful fallback if Google Fonts API unavailable
- **Sprite loading** - Fallback to text preview if sprites fail
- **Network issues** - Retry logic with exponential backoff

## Data Invariants

- **Font data** - Static JSON file at `src/font-preview/fontInfo.json` (1,785+ fonts)
- **Sprite CSS** - CSS classes in `src/font-preview/font-previews.css`
- **Variant format** - Use standard format: "0,400" (italic,weight) or "400" (weight only)
- **Font names** - Sanitize for CSS class names using `sanitizeFontName()`
