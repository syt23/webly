const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'build')))

app.get('/mail', (req, res) => {
    return res.send('pong')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${content} `

    var mail = {
        from: name,
        to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  //Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
})

app.listen(port, () => {
    console.log("Server is up on port " + port)
})