const express = require('express');
const app = express();


// In production "PORT" is gonna be environment variable port number, in developer it's "5000"
const PORT = process.env.PORT || 5000;


//Middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + './public/')
})




app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})