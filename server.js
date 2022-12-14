//The Basics
const { defaultMaxListeners } = require('events');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
require("dotenv").config()
const PORT = process.env.PORT

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'))

// Mongoose
const mongoose = require('mongoose')
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI)

//Models Required:

const Movie = require('./models/movies.js');
const TV = require('./models/tvs.js')

// HOME
app.get('/', (req, res) => {
    res.render('home.ejs')
})

//Reference for Testing
app.get('/references', (req, res) => {
    res.send("Initial set-up begun")
})

//*****************//
//**** Movies ****//

app.get('/movies', async (req, res) => {
    let movies = await Movie.find({})
    res.render('movies.ejs', {
        movies
    })
    
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

// EDIT Movie / Add Reference
app.get('/movies/:id/edit2', (req, res) =>{
    Movie.findById(req.params.id, (err, foundMovie) =>{
        res.render('./mainEdits/editMovie.ejs', {movies: foundMovie})
    })
})



app.put('/movies/:id/ref',  (req, res) => {
    Movie.findByIdAndUpdate(
        req.params.id,
        {
        $push: {
            references: req.body,
        }
        
    },{new:true}, (err, foundMovie)=> {
        
        res.redirect('/movies')
    })
    /* console.log(req.params.id) */
})

app.get('/movies/:id/edit2', (req, res) =>{
    Movie.findById(req.params.id, (err, foundMovie) =>{
        res.render('./mainEdits/editMovie.ejs', {movies: foundMovie})
    })
})
app.put('/movies/:id', (req, res) => {
    /* console.log(req.body) */
    Movie.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMovie) => {
     console.log(updatedMovie),   res.redirect('/movies')
    })
})

// DELETE/DESTROY WHOLE MOVIE

app.delete('/movies/:id', (req, res) => {
    Movie.findByIdAndRemove(req.params.id, (err, data)=> {
        if(err) console.log(err)
        res.redirect('/movies')
    })
})



//SHOW Movies
app.get('/movies/:id', async (req, res) => {
    const movies = await Movie.findById(req.params.id);
    res.render('movieID.ejs', {
        movies
    })
})

//*****************//
//**** Television ****//

app.get('/television', async (req, res) => {
    let tvs = await TV.find({})
    res.render('television.ejs', {
        tvs
    })
    
})


//New TV Show
app.get('/television/new', (req, res) => {
    res.render('newTV.ejs');
})

app.post('/television', (req, res) => {
    TV.create(req.body, (error, createdTV) => {
        if (error) {
            console.log('error', error);
            res.send(error);
        } else {
            res.redirect('/television')
        }
    })
    
})

// EDIT TV / Add Reference
app.get('/television/:id/edit', (req, res) =>{
    TV.findById(req.params.id, (err, foundTV) =>{
        res.render('./references/editTVRef.ejs', {tvs: foundTV})
    })
})

app.put('/television/:id/ref',  (req, res) => {
    
    TV.findByIdAndUpdate(
        req.params.id,
        {
        $push: {
            references: req.body,
        }
    
    },{new:true}, (err, foundTV)=> {
        
        res.redirect('/television')
    })    
})

app.get('/television/:id/edit2', (req, res) => {
    TV.findById(req.params.id, (err, foundTV) =>{
        res.render('./mainEdits/editTV.ejs', {tvs: foundTV})
    })
    /* console.log(req.params.id) */
})

app.put('/television/:id', (req, res) => {
    /* console.log(req.body) */
    TV.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTV) => {
     console.log(updatedTV),   res.redirect('/television')
    })
})


// DELETE/DESTROY Reference

app.put('/television/:id/reference', (req, res) => {
    let body = req.body.refID
    console.log("This is the req.body.refID", req.body.refID)
    TV.updateOne(
        {id: req.params.id},
        {
        $pull: {
            references: {_id: {$in: [body]}},
        }    
        }, {new:true}, (err, foundTV)=> {
            if (err) {console.log(err)}
            else {console.log("This is foundTV", foundTV)
            res.redirect('/television')};
        }
        
    )
    console.log("This is in the route!", req.params)
})




//SHOW TV
app.get('/television/:id', async (req, res) => {
    const tvs = await TV.findById(req.params.id);
    res.render('tvID.ejs', {
        tvs
    })
})

//DELETE/DESTROY WHOLE TV SHOW
app.delete('/television/:id', (req, res) => {
    TV.findByIdAndRemove(req.params.id, (err, data)=> {
        if(err) console.log(err)
        res.redirect('/television')
    })
})

app.listen(PORT || 3000, () => {
    console.log("Server is listening on ", PORT)
})

