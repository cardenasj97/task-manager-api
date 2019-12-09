const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'john@example.com',
        subject: 'Welcome to the App',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'john@example.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. We hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}