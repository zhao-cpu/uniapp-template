import presetWeapp from 'unocss-preset-weapp';
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer';

const { presetWeappAttributify, transformerAttributify } = extractorAttributify();
export default {
  presets: [presetWeapp(), presetWeappAttributify()],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      center: 'flex justify-center items-center',
    },
  ],
  theme: {
    colors: {
      primary: '#186ffc',
    },
  },

  transformers: [transformerAttributify(), transformerClass()],
};
