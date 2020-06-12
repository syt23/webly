const express = require('express')
const path = require('path')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const favicon = require('express-favicon')
const cors = require('cors');
// const creds = require('./backend/config')

const app = express()
app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))

const port = process.env.PORT || 3001

var transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
}
var transporter = nodemailer.createTransport(transport)

app.post('/mail', (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var number = req.body.number
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n number: ${number} \n message: ${message} `

    var mail = {
        from: name,
        to: process.env.USER,
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err)
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })

    transporter.close();
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
    console.log("Server is up on port " + port)
})