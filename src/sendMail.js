var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "advertiamailtest@gmail.com", //replace with the email address
    pass: "dzatfgexEzXt2HQBlj", //replace with the password
  },
});

// verifying the connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages!");
  }
});

router.post("/contact", (req, res, next) => {
  var email = req.body.email;
  var message = req.body.message;
  var name = req.body.name;
  var number = req.body.number;
  var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `;

  var mail = {
    from: email,
    to: "advertiamailtest@gmail.com",
    name: name,
    number: number,
    message: message,
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});
