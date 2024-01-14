import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    UnoCSS(),
    AutoImport({
      dts: './src/types/auto-imports.d.ts',
      imports: ['vue', 'uni-app'],
      dirs: ['./src/hooks/**', './src/api/**'],
    }),
  ],

  // 发布时删除 console
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
