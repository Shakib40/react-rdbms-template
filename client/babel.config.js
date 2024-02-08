// eslint-disable-next-line no-undef
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components'
          // Add more aliases as needed
        }
      }
    ]
  ]
};
  