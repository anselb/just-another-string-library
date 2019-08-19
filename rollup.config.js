import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.js',
    plugins: [terser()],
    output: {
      file: 'umd/just-another-string-library.js',
      format: 'umd',
      name: 'justAnotherStringLibrary',
    },
  }, {
    input: 'src/strPrototypeIndex.js',
    plugins: [terser()],
    output: {
      file: 'umd/just-another-string-library-prototype.js',
      format: 'umd',
      name: 'justAnotherStringLibraryProto',
    },
  },
  {
    input: 'src/index.js',
    output: {
      file: 'esm/index.js',
      format: 'esm',
    },
  },
];
