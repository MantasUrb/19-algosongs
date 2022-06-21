const express = require('express');
const app = express();
const nodemailer = require('nodemailer');


// In production "PORT" is gonna be environment variable port number, in developer it's "5000"
const PORT = process.env.PORT || 5000;


//Middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + './public/')
})

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'johnthetestguy@gmail.com',
            pass: ''
        }
    })

        const mailOptions = {
            from: req.body.email,
            to: 'johnthetestguy@gmail.com',
            subject: `Message from ${req.body.user}`,
            text: req.body.message
        }

        transporter.sendMail(mailOptions, (error, info)=>{
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.send('success');
            }
        })
})


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})