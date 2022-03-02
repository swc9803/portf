const path = require('path')

module.exports = (api, options) => {
  api.registerCommand('build:prerender', async args => {
    const PrerenderSPAPlugin = require('prerender-spa-plugin')

    // call api or file
    let data = []
    if (process.env.NODE_ENV === 'production') {
      data = require('./routeList.prod.json').data
    } else if (process.env.NODE_ENV === 'stage') {
      data = require('./routeList.stage.json').data
    } else {
      data = require('./routeList.dev.json').data
    }

    const makeUrl = {
      arena: data => `/arena/${data.game}/${data.id}/info`,
      special: data => `/special/${data.slug}`
    }

    api.chainWebpack(config => {
      config.plugin('prerender').use(PrerenderSPAPlugin, [
        {
          staticDir: path.join(__dirname, 'dist'),
          server: {
            port: 8080
          },
          routes: ['/'].concat(data.map(route => makeUrl[route.type](route))),
          renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
            renderAfterElementExists: '#app',
            headless: true
          })
        }
      ])
    })

    await api.service.run('build', args)
  })
}
