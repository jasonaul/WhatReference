const mongoose = require('mongoose')


// Creating our Schema for references

const tvSchema = new mongoose.Schema({
    title: {type: String, required: false},
    year: {type: String, required: false},
    image: {type: String, required: false},
    wikipedia: {type: String, required: false},
    imdb: {type: String, required: false},
    description: {type: String, required: false},
    plot: {type: String, required: false},
    references: [{title: String, season: String, episode: String, episodeName: String, reference: String, mediaType: String, timestampM: Number, timestampS: Number, description: String, relevance: String, refImg: String}]
})

// Create the model
    //'Reference' is the collection, referenceSchema is the schema
const TV = mongoose.model('TV', tvSchema)

module.exports = TV; 