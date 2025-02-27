import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import json from '@rollup/plugin-json';
// import ignore from './rollup-plugins/ignore';
// import { ignoreTextfieldFiles } from './elements/ignore/textfield';
// import { ignoreSelectFiles } from './elements/ignore/select';
// import { ignoreSwitchFiles } from './elements/ignore/switch';
import litSass from '@ponday/rollup-plugin-lit-sass';

const dev = process.env.ROLLUP_WATCH;

const serveopts = {
  contentBase: ['./dist'],
  host: '0.0.0.0',
  port: 5000,
  allowCrossOrigin: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

const plugins = [
  nodeResolve({}),
  commonjs(),
  typescript(),
  json(),
  litSass(),
  babel({
    exclude: 'node_modules/**',
  }),
  dev && serve(serveopts),
  !dev && terser(),
  // ignore({
  //   files: [...ignoreTextfieldFiles, ...ignoreSelectFiles, ...ignoreSwitchFiles].map((file) => require.resolve(file)),
  // }),
];

// export default [
//   {
//     input: 'src/boilerplate-card.ts',
//     output: {
//       dir: 'dist',
//       format: 'es',
//     },
//     plugins: [...plugins],
//   },
// ];

export default [
  {
    watch: {
      chokidar: {
        usePolling: true,
      },
    },
    input: 'src/tadothermostat-card.ts',
    output: {
      format: 'es',
      file: 'dist/tadothermostat-card.js',
    },
    plugins: [...plugins],
  },
];


