module.exports = {
  devServer:{
      proxy:{
          '/api':{
              target:'http://bim5d-pro-test.glodon.com',
            //   target:'https://bim5d-vip.glodon.com',
              changeOrigin:true,
          },
      }
  }
}