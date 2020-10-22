const express = require('express');
const app = express(); //exposes methods we can use.  

app.get("/heartbeat", function(req, res) {
    res.json({
      is: "working"
    });
  });

app.listen(3001, () => {
    console.log(`Server started at Port ${3001}`)
});