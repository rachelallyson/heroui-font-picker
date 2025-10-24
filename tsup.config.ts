import { defineConfig } from 'tsup';
import { copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

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
  onSuccess: async () => {
    // Copy required assets (sprites are embedded in CSS as base64)
    const assets = [
      'src/font-preview/font-previews.css',
      'src/font-preview/fontInfo.json'
    ];

    assets.forEach(asset => {
      try {
        mkdirSync(join('dist'), { recursive: true });
        copyFileSync(asset, join('dist', asset.split('/').pop()));
      } catch (error) {
        console.warn(`Could not copy ${asset}:`, error.message);
      }
    });
  },
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
