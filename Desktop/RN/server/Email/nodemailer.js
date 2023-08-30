var nodemailer = require('nodemailer')

const SendEmail = (code ,req, res, next) => {
var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'ste.yoyojul@outlook.com',
    pass: 'ALA9321x'
  }
});

var mailOptions = {
  from: 'ste.yoyojul@outlook.com',
  to: 'ste.yoyojul@gmail.com' ,
  subject: 'Sending Email using STE.YOYOJUL',
  text: 'Code du vérification : '+code ,
}


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
     next()
  }
})

}

module.exports = { SendEmail }