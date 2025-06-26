import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  input: 'src/main.js',
  output: {
    file: 'dist/main.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
  ],
});
