import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        lesson: resolve(__dirname, 'src/Views/lesson.html'),
        // contato: resolve(__dirname, 'src/Views/contato.html'),
      },
    },
  },
});