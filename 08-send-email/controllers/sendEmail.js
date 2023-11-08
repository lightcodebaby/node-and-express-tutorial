const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req, res) => {
    let testAccount = nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'user@ethereal.email',
            pass: 'pass',
        },
    });

    let info = await transporter.sendMail({
        from: '"Ruben Lopez Gomez <rubenlg94@gmail.com>',
        to: 'lightcodebaby@gmail.com',
        subject: 'Hello',
        html: '<h2>Sending emails with Node.js</h2>',
    });

    res.json(info);
};

const sendEmail = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'rubenlg94@gmail',
        from: 'lightcodebaby@gmail.com',
        subjetc: 'subject',
        text: 'Sending emails with Node.js',
        html: '<h2>Sending emails with Node.js</h2>',
    };
    const info = await sgMail.send(msg);
    res.json(info);
};

module.exports = sendEmail;
