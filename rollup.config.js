import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import { copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Copy required assets (sprites are embedded in CSS as base64)
function copyAssets() {
    return {
        name: 'copy-assets',
        writeBundle() {
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
        }
    };
}

const external = [
    'react',
    'react-dom',
    'react/jsx-runtime',
    '@heroui/react',
    '@heroui/autocomplete',
    '@react-aria/i18n'
];

export default [
    // Default build (individual packages)
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.mjs',
            format: 'esm',
            banner: '"use client";'
        },
        external,
        plugins: [
            resolve({
                preferBuiltins: false
            }),
            commonjs(),
            json(),
            typescript({
                tsconfig: './tsconfig.json',
                declaration: false,
                exclude: ['**/*.css']
            }),
            postcss({
                extract: false,
                minimize: true
            }),
            terser(),
            copyAssets()
        ]
    },
    // CJS build (individual packages)
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.js',
            format: 'cjs',
            banner: '"use client";'
        },
        external,
        plugins: [
            resolve({
                preferBuiltins: false
            }),
            commonjs(),
            json(),
            typescript({
                tsconfig: './tsconfig.json',
                declaration: false,
                exclude: ['**/*.css']
            }),
            postcss({
                extract: false,
                minimize: true
            }),
            terser(),
            copyAssets()
        ]
    },
    // Type definitions (default)
    {
        input: 'src/index-dts.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'esm'
        },
        external,
        plugins: [
            dts()
        ]
    },
];