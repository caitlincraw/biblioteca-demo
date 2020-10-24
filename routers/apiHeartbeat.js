const express = require('express');
const router = express.Router();

router.get("/heartbeat", function(req, res) {
    res.json({
      is: "working"
    });
  });

module.exports = router;