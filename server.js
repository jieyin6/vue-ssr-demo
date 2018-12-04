var fs = require('fs')
var path = require('path')

global.Vue = require('vue')

var layout = fs.readFileSync('./index.html', 'utf8')

var renderer = require('vue-server-renderer').createRenderer()

var express = require('express')
var server = express()

server.use('/assets', express.static(
    path.resolve(__dirname, 'assets')
))

server.get('*', function (req, res) {
    renderer.renderToString(
        require('./assets/app')(),
        function (err, html) {
            if (err) {
                console.error(err)
                return res.status(500).send('Server Error')
            }

            res.send(layout.replace('<div id="app"></div>', html))
        }
    )
})

server.listen(8080, function (err) {
    if (err) throw err
    console.log("Server is running at localhost:8080")
})