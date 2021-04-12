var express = require('express')
var router = express.Router()
var nodemailer = require('nodemailer')
var cors = require('cors')
var helmet = require('helmet')
const creds = require('./config')

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/', router)

var transport = {
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take messages')
  }
})

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var number = req.body.number
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} \n number: ${number} `

  var mail = {
    from: name,
    to: creds.USER,
    text: content,
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail',
      })
    } else {
      res.json({
        status: 'success',
      })
    }
  })
})

const port = process.env.PORT || 3002
app.listen(port)
