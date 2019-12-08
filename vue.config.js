module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 1
      }
    }
  }
};
