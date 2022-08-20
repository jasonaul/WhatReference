const mongoose = require('mongoose')

// Creating our Schema for references

const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    image: {type: String, required: false}
})

// Create the model
    //'Reference' is the collection, referenceSchema is the schema
const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie; 