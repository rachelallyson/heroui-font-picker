import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    '@heroui/react',
    '@heroui/autocomplete',
    '@react-aria/i18n'
  ],
  noExternal: [],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
    options.external = [
      'react',
      'react-dom',
      'react/jsx-runtime',
      '@heroui/react',
      '@heroui/autocomplete',
      '@react-aria/i18n'
    ];
    options.platform = 'neutral';
    options.mainFields = ['module', 'main'];
    options.bundle = true;
    options.treeShaking = true;
    options.conditions = ['import', 'module', 'browser', 'default'];
    options.resolveExtensions = ['.ts', '.tsx', '.js', '.jsx'];
    options.define = {
      'process.env.NODE_ENV': '"production"'
    };
  },
});
