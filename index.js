const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.get('/', function(req, res) {
    res.render('pages/index')
})
app.get('/histogram', function(req, res) {
    res.sendFile('public/histogram.html', { root: __dirname })
})
app.get('/database', function(req, res) {
    res.sendFile('public/database.html', { root: __dirname })
})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
