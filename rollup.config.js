import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy-glob';
import embedCSS from 'rollup-plugin-embed-css';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    embedCSS(),
    copy([{ files: './static/*.css', dest: './dist' }])
  ],
  external: ['react']
};
