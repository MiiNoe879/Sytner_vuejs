const express = require('express')
var path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, './dist')));
app.use("/", express.static(__dirname + "/"));

app.get('*', (req, res) => res.sendFile( __dirname + "/dist/index.html" ))

app.listen(7300, () => console.log('Example app listening on port 3000!'))