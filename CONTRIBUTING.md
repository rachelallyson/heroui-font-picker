# Contributing to HeroUI Font Picker

Thank you for your interest in contributing to the HeroUI Font Picker! This guide will help you get started with development.

## Development Setup

### Prerequisites

- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher
- **Git**: Latest version

### Installation

1. **Fork and clone the repository**:

   ```bash
   git clone https://github.com/your-username/heroui-font-picker.git
   cd heroui-font-picker
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install HeroUI dependencies** (choose one):

   ```bash
   # Option 1: Full HeroUI package
   npm install @heroui/react react react-dom
   
   # Option 2: Autocomplete-only package
   npm install @heroui/autocomplete react react-dom
   ```

### Development Commands

```bash
# Build the package
npm run build

# Watch mode for development
npm run dev

# Run tests (when available)
npm test

# Lint code
npm run lint

# Format code
npm run format
```

## Project Structure

```
src/
├── components/
│   └── FontPicker.tsx          # Main component
├── font-preview/
│   ├── fontInfo.json           # Font data (1,785+ fonts)
│   ├── font-previews.css       # Sprite CSS
│   └── sprite.*.svg            # Sprite images
├── styles/
│   └── font-picker.css         # Component styles
├── types/
│   └── types.ts                # TypeScript definitions
├── utils/
│   ├── fontUtils.ts            # Font utilities
│   └── heroUI.ts               # HeroUI component detection
└── index.ts                    # Public exports
```

## Development Guidelines

### Code Style

- **TypeScript**: Use strict typing, avoid `any`
- **React**: Use functional components with hooks
- **Naming**: Use descriptive names, follow camelCase
- **Comments**: Document complex logic and public APIs

### Component Development

1. **Follow HeroUI patterns**: Use HeroUI's Autocomplete as the base
2. **Maintain compatibility**: Support both `@heroui/react` and `@heroui/autocomplete`
3. **Performance**: Optimize for large font lists (1,785+ fonts)
4. **Accessibility**: Follow WCAG guidelines

### Font Loading Strategy

- **Previews**: Use sprite images for instant previews
- **Selected Fonts**: Load from Google Fonts API on-demand
- **Variants**: Default to 4 essential variants, allow all variants option
- **Error Handling**: Graceful fallback for network issues

### Testing Strategy

1. **Component Testing**: Test with both HeroUI package configurations
2. **Font Loading**: Test with network throttling and offline scenarios
3. **Sprite System**: Test preview rendering across different browsers
4. **Framework Integration**: Test with Next.js, Vite, and CRA

## Making Changes

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

- Follow the code style guidelines
- Add tests for new functionality
- Update documentation if needed
- Ensure all existing tests pass

### 3. Test Your Changes

```bash
# Build the package
npm run build

# Test in demo
cd demo
npm install
npm run dev
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature"
```

**Commit Message Format**:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test changes
- `chore:` - Build/tooling changes

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub.

## Pull Request Guidelines

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] All tests pass
- [ ] Documentation is updated
- [ ] No breaking changes (or clearly documented)
- [ ] Changes are tested in demo

### PR Description

Include:

- **What**: Description of changes
- **Why**: Reason for the change
- **How**: How the change works
- **Testing**: How you tested the changes
- **Screenshots**: If UI changes

### Review Process

1. **Automated Checks**: CI/CD pipeline runs tests
2. **Code Review**: Maintainers review the code
3. **Testing**: Changes are tested in different environments
4. **Approval**: At least one maintainer approval required

## Issue Guidelines

### Before Creating an Issue

1. **Search existing issues** to avoid duplicates
2. **Check documentation** for solutions
3. **Try the latest version** to see if issue is fixed

### Issue Template

```markdown
## Description
Brief description of the issue

## Steps to Reproduce
1. Step one
2. Step two
3. Step three

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 91]
- Node.js: [e.g., 18.0.0]
- Package version: [e.g., 1.0.0]

## Additional Context
Any other relevant information
```

## Release Process

### Version Bumping

We follow [Semantic Versioning](https://semver.org/):

- **Patch** (1.0.1): Bug fixes
- **Minor** (1.1.0): New features (backward compatible)
- **Major** (2.0.0): Breaking changes

### Release Steps

1. **Update version** in `package.json`
2. **Update CHANGELOG.md** with changes
3. **Create release tag**: `git tag v1.0.1`
4. **Push tag**: `git push origin v1.0.1`
5. **Publish to npm**: `npm publish`

## Code of Conduct

### Our Standards

- **Be respectful**: Treat everyone with respect
- **Be constructive**: Provide helpful feedback
- **Be inclusive**: Welcome contributors from all backgrounds
- **Be patient**: Remember that everyone is learning

### Reporting Issues

If you experience or witness unacceptable behavior, please report it to the maintainers.

## Getting Help

### Development Questions

- **GitHub Discussions**: Ask questions and share ideas
- **Issues**: Report bugs and request features
- **Discord**: Real-time chat (if available)

### Resources

- [HeroUI Documentation](https://heroui.com/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Google Fonts API](https://developers.google.com/fonts)

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

## Thank You

Thank you for contributing to the HeroUI Font Picker! Your contributions help make this project better for everyone.
