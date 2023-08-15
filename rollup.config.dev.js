import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
// import ignore from './rollup-plugins/ignore';
// import { ignoreTextfieldFiles } from './elements/ignore/textfield';
// import { ignoreSelectFiles } from './elements/ignore/select';
// import { ignoreSwitchFiles } from './elements/ignore/switch';
import litSass from '@ponday/rollup-plugin-lit-sass';

export default {
  input: ['src/tadothermostat-card.ts'],
  output: {
    dir: './dist',
    format: 'es',
  },
  plugins: [
    resolve(),
    typescript(),
    json(),
    litSass(),
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
    serve({
      contentBase: './dist',
      host: '0.0.0.0',
      port: 5000,
      allowCrossOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }),
    // ignore({
    //   files: [...ignoreTextfieldFiles, ...ignoreSelectFiles, ...ignoreSwitchFiles].map((file) => require.resolve(file)),
    // }),
  ],
};