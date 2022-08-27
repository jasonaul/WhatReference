const express = require('express')
const router = express.Router()

const db = require('../models')

router.get('/', (req, res) => {
    db.Movie.find()
    .then((results) => {
        const context = {allMovies: results}
        res.render("/movieID.ejs", context)
    })
})

module.exports = router