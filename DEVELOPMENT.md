# Development Guide

Quick reference for AI assistants and developers working on this package.

## Project Structure

```
src/
├── components/
│   └── FontPicker.tsx          # Main component
├── font-preview/
│   ├── fontInfo.json           # Font data (1,785+ fonts)
│   ├── font-previews.css       # Sprite CSS (base64 embedded)
│   └── sprite.*.svg            # Sprite files (not used in final build)
├── styles/
│   └── font-picker.css         # Component styles
├── types/
│   └── types.ts                # TypeScript definitions
├── utils/
│   ├── fontUtils.ts            # Font utilities
│   └── heroUI.ts               # HeroUI component detection
└── index.ts                    # Public exports
```

## Key Files for AI

1. **`src/index.ts`** - Public API surface
2. **`src/components/FontPicker.tsx`** - Main component
3. **`src/utils/heroUI.ts`** - HeroUI component detection
4. **`src/utils/fontUtils.ts`** - Font loading utilities
5. **`src/types.ts`** - TypeScript definitions

## Development Commands

```bash
# Build package
npm run build

# Watch mode
npm run dev

# Generate docs
npm run docs

# Watch docs
npm run docs:serve
```

## AI Development Rules

1. **Always read** `docs/llm-context.md` first
2. **Use public exports** from `src/index.ts` only
3. **Support both HeroUI packages** via dynamic detection
4. **Default to 4-variant loading** (not all variants)
5. **Handle errors gracefully** with fallbacks
6. **Test both configurations** (@heroui/react and @heroui/autocomplete)

## Common Tasks

### Adding New Fonts

1. Update `src/font-preview/fontInfo.json`
2. Regenerate sprites (if needed)
3. Update CSS classes in `font-previews.css`

### Modifying Component

1. Edit `src/components/FontPicker.tsx`
2. Update types in `src/types.ts` if needed
3. Test with both HeroUI packages

### Updating Utilities

1. Modify `src/utils/fontUtils.ts`
2. Update `src/utils/heroUI.ts` if needed
3. Test font loading scenarios

## Testing Checklist

- [ ] Works with `@heroui/react`
- [ ] Works with `@heroui/autocomplete`
- [ ] Font loading works offline
- [ ] Font loading works online
- [ ] Previews show correctly
- [ ] TypeScript types are correct
- [ ] Build succeeds
- [ ] Documentation is updated

## Debugging

### Common Issues

1. **HeroUI not found**: Check peer dependencies
2. **Fonts not loading**: Check network and API access
3. **Previews not showing**: Check CSS loading
4. **TypeScript errors**: Check imports and types

### Debug Commands

```bash
# Check package installation
npm list @rachelallyson/heroui-font-picker

# Check HeroUI dependencies
npm list @heroui/react @heroui/autocomplete

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```
