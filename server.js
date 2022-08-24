const express = require('express');
const app = express();
const methodOverride = require('method-override');
/* const session = require('express-session') */



// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(methodOverride('_method'))


// Mongoose
const mongoose = require('mongoose')
const mongoURI = 'mongodb://127.0.0.1:27017/whatreference'
mongoose.connect(mongoURI)


//Models Required:

const Movie = require('./models/movie.js');
const Reference = require('./models/references.js');

app.get('/', (req, res) => {
    res.render('home.ejs')
})








app.get('/references', (req, res) => {
    res.send("Initial set-up begun")
})

app.get('/movies', async (req, res) => {
    /* const movie = Movie.findById(req.params.id) */
    /* let movies = Movie.findById(req.params.id) */
    let movies = await Movie.find({})
    res.render('movies.ejs', {
        movies
    })
    
})



// NEW MOVIE REFERENCE
/* app.get('/movies/:id/new', async (req, res) => {
    const movies = await Movie.findById(req.params.id);
    res.render('reference.ejs', {
        movies
    });
})

app.post('/movies/:id', (req, res) => {
    Reference.create(req.body, (error, createdReference) => {
        if (error) {
            console.log('error', error);
        } else {
            res.redirect('/movies/:id')
        }
    })
}) */



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

// EDIT Movie / Add Reference
app.get('/movies/:id/edit', (req, res) =>{
    Movie.findById(req.params.id, (err, foundMovie) =>{
        res.render('editMovie.ejs', {movies: foundMovie})
    })
})

app.put('/movies/:id', async (req, res) =>{
    /* const reference = new Reference({reference:req.body.references.reference})
    await reference.save(); */
  /*   await Movie.findOneAndUpdate({$push: {reference}}) */
    Movie.findById(req.params.id, req.body, (err, updatedModel) =>{
        res.redirect('/movies')
        console.log(req.body)
    })
    
})

//SHOW Movies
app.get('/movies/:id', async (req, res) => {
    const movies = await Movie.findById(req.params.id);
    res.render('movieID.ejs', {
        movies
    })
})


app.listen(3000, () => {
    console.log("Server is listening on Port 3000.")
})