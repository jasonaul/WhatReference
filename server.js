const express = require('express');
const app = express();

app.get('/references', (req, res) => {
    res.send("Initial set-up begun")
})


app.listen(3000, () => {
    console.log("Server is listening on Port 3000.")
})