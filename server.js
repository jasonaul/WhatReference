const { defaultMaxListeners } = require('events');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
require("dotenv").config()




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


app.get('/', (req, res) => {
    res.render('home.ejs')
})




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
app.get('/movies/:id/edit', (req, res) =>{
    Movie.findById(req.params.id, (err, foundMovie) =>{
        res.render('./references/editMovieRef.ejs', {movies: foundMovie})
    })
})



app.put('/movies/:id',  (req, res) => {
    Movie.findByIdAndUpdate(
        req.params.id,
        {
        $push: {
            references: req.body,
        }
        
    },{new:true}, (err, foundMovie)=> {
        
        res.redirect('/movies')
    })
    console.log(req.params.id)
})

// DELETE/DESTROY Reference



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
    console.log(req.params.id)
})

app.put('/television/:id', (req, res) => {
    console.log(req.body)
    TV.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTV) => {
     console.log(updatedTV),   res.redirect('/television')
    })
})


// DELETE/DESTROY Reference

app.delete('/television/:id', (req, res) => {
    let body = req.body.refID
    console.log("This is the req.body.refID", req.body.refID)
    TV.updateOne(
        {id: req.params.id},
        {
        $pull: {
            references: {_id: mongoose.Types.ObjectId(body)},
        }    
        }, {new:true}, (err, foundTV)=> {
            console.log("This is foundTV", foundTV)
            res.redirect('#')
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

app.listen(3000, () => {
    console.log("Server is listening on Port 3000.")
})

