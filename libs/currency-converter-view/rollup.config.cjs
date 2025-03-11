const { withNx } = require('@nx/rollup/with-nx');
const url = require('@rollup/plugin-url');
const svg = require('@svgr/rollup');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: '../../dist/libs/currency-converter-view',
    tsConfig: './tsconfig.lib.json',
    compiler: 'babel',
    external: [ 'react', 'react-dom', '@emotion/react/jsx-runtime', '@cc-nx-monorepo/currency-converter-ui' ],
    format: [ 'esm' ],
    assets: [ { input: '.', output: '.', glob: 'README.md' } ],
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    plugins: [
      svg({
        svgo: false,
        titleProp: true,
        ref: true,
      }),
      url({
        limit: 10000, // 10kB
      }),
    ],
  }
);
