var nodemailer = require('nodemailer');
// const creds = require('../config/config');

var transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});