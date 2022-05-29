module.exports = {
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://www.api.qsyj.com',
                ws: true,
                changrigin: true,
                pathRewrite: {
                    '^/api': ''
                }

            }
        }

    }
}