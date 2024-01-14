import { defineConfig } from 'unocss';
import { presetWind } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
export default defineConfig({
  shortcuts: {},
  theme: {
    colors: {
      primary: '#186ffc',
    },
  },
  rules: [],
  variants: [],
  transformers: [transformerDirectives()],
  presets: [presetWind()],
});
