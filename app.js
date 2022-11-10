const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/HomePage.html')
})

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/AboutPage.html')
})

app.get('/photos', (request, response, next) => {
    response.sendFile(__dirname + '/views/PhotoPage.html')
})

app.get('/books', (request, response, next) => {
    response.sendFile(__dirname + '/views/WorksPage.html')
})

app.listen(3000, () => console.log('Running on port 3000.'))