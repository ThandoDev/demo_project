const express = require('express');
const app = express();
const port = 5000


app.listen(5000, () =>{
    console.log(`app is listening on port ${port}`)
});