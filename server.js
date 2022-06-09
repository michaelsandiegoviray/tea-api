const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
app.use(cors())

//serve up HTML file and serve JSON

const tea = {

    'oolong': {

        'temp': 'hot',
        'flavor': 'yes',
        'heat': 'no',
        'steepTime': 180,
        'flavor': 'delicious',
    },
    'jasmine': {
        'temp': 'cold',
        'flavor': 'no',
        'heat': 'yes',
        'steepTime': 10000,
        'flavor': 'nasty',


    },
    'unknown': {
        'temp': 'N/A',
        'flavor': 'N/A',
        'heat': 'N/A',
        'steepTime': 0,
        'flavor': 'N/A',


    },



}







app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')

})

app.get('/api/:name', (req, res) => {
    const teaName = req.params.name.toLowerCase()

    tea[teaName] ? res.json(tea[teaName]) : res.json(tea['unknown'])
})

app.listen(process.env.PORT | PORT, () => {


    console.log(`The server is running on port ${PORT}`)
})