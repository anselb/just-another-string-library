export default [{
  input: 'src/index.js',
  output: {
    file: 'umd/just-another-string-library.js',
    format: 'umd',
    name: 'justAnotherStringLibrary',
  },
}, {
  input: 'src/strPrototypeIndex.js',
  output: {
    file: 'umd/just-another-string-library-prototype.js',
    format: 'umd',
    name: 'justAnotherStringLibraryProto',
  },
}];
