const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get("/books", async (req, res) => {
    const { author, title } = req.body;
    if (!author && !title) {
        console.log("No title and author were given");
        res.send(req.body);
    } else{
        const params = `${title ? "title=" + title : ''}${author ? "&author=" + author : ''}` //ternary expression...building the api url if left blank
        fetch(`http://openlibrary.org/search.json?${params}&limit=10`)
            .then(result => result.json())
            .then(data => res.json(data))
            .catch(err => res.status(404).send(err));
    }
});

module.exports = router;