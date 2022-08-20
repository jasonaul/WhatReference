const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session')

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Mongoose
const mongoose = require('mongoose')
const mongoURI = 'mongodb://127.0.0.1:27017/whatreference'
mongoose.connect(mongoURI)


//Models Required:

const Movie = require('./models/movie.js')

app.get('/', (req, res) => {
    res.render('home.ejs')
})




//New Movie
app.get('/movies/new', (req, res) => {
    res.render('newMovie.ejs');
})

app.post('/movies', (req, res) => {
    /* movies.push(req.body) */
    Movie.create(req.body, (error, createdMovie) => {
        if (error) {
            console.log('error', error);
            res.send(error);
        } else {
            res.redirect('/movies')
        }
    })
    
})



app.get('/references', (req, res) => {
    res.send("Initial set-up begun")
})

app.get('/movies', (req, res) => {
    /* const movie = Movie.findById(req.params.id) */
    let movies = Movie.findById(req.params.id)
    console.log('movies', movies)
    res.render('movies.ejs', {
        movies
    })
})

//SHOW Movies
app.get('/movies/:id', (req, res) => {
    res.render('movies.ejs', {
        movies: Movie[req.params.id]
    })
})


app.listen(3000, () => {
    console.log("Server is listening on Port 3000.")
})