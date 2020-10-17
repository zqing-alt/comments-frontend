module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') ? '37.5' : '75'
      },
      propList: ['*']
    }
  }
}
