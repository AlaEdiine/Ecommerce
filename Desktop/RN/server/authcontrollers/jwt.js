const jwt = require('jsonwebtoken')
const parser = require('body-parser')
let secret = "H254JY"
const authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return res
                .status(403)
                .render('bab', {
                    message : 'Connecter Dabord Log In + Psw'
                })
    }
    try {
        const dataverif = jwt.verify(token,secret)

     //   jeyaMinauth = dataverif.email
      //  console.log(jeyaMinauth)
    

        return next();
      } catch {
        return res
                    .status(403)
                    .render('login' , {
                        message : 'Connecter Dabord Log In + Psw'
                    })
      }
  }

module.exports = { authorization }
