const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engines and views locations
app.set('view engine', 'hbs')
app.set('views', viewspath)
hbs.registerPartials(partialPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Abhi'
    })
})

app.get('/about', (req, res) =>{
    res.render('about', {
        title: 'About me',
        name: 'Abhijith Goud'
    })
})

app.get('/help', (req, res) =>{
    res.render('help', {
        helpText: 'This is a some helpful text.',
        title: 'Help',
        name: 'Abhijith Goud'
    })
})

app.get('/weather', (req, res)=> {
    if (!req.query.address){
        return res.send({
            error: 'you must provide an address!'
        })
    }
    res.send({
        forecast: 'Its snowing',
        location: 'Sandton, South Africa',
        address: req.query.address

    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search tera'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res)=> {
    res.render('404', {
        title: '404',
        name: 'Abhijith Goud',
        errorMessage: 'Help articel not found'
    })
})

app.get('*', (req, res)=>{
    res.render('404', {
        title: '404',
        name: 'Abhijith Goud',
        errorMessage: 'Page not found.'
    })
})
app.listen(9000, ()=> {
    console.log('Server is up on port 3060')
})