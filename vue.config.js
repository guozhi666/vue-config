
// vue3 配置文件 配置代理
module.exports = {
    proxy: {
        // 匹配请求路径前面的api 匹配到了就走这个，匹配不到就不走
        '/api': {
    
          // 把请求路径匹配到的api替换成这个路径
          // 例如： 请求www.baidu.com/map, 只需要请求 ‘api/map’
          target: 'www.baidu.com',
          changeOrigin: true,
    
          // 重写请求路径，因为最终请求的时候带上api肯定出错，所以此处重写url，把api换成 空字符串，相当于啥都没有
          pathRewrite: {
            '^/api': '',
          }
        },
    
        // 你的问题, 请求时只需要url=api2/xxx; 就行
        'api2': {
          target: 'mock.com/4/api',
          changeOrigin: true,
          pathRewrite: {
            '^/api2': '',
          }
        }
      },
}