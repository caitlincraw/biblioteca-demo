const express = require('express');
const router = express.Router();

router.get("/login", (req,res) => {
    res.json({
        location: "login screen"
    })
})

module.exports = router;