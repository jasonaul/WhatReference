const mongoose = require('mongoose')

// Creating our Schema for references

const referenceSchema = new mongoose.Schema({
    title: {type: String, required: true},
    media: {type: String, required: true},
    timestamp: {type: Number, required: false},
    description: {type: String, required: true},
    relevance: {type: String, required: false},
    image: {type: String, required: false}
})

// Create the model
    //'Reference' is the collection, referenceSchema is the schema
const Reference = mongoose.model('Reference', referenceSchema)

module.exports = Reference; 