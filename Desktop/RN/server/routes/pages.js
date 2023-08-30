const express = require('express')
const jwt = require('jsonwebtoken')
const ControllersPage = require('../authcontrollers/authLogin')
const { authorization } = require('../authcontrollers/jwt')
//const { SendEmail } = require('../Email/nodemailer')
const router = express.Router()
let secret = "H254JY"

router.post('/insertuser', ControllersPage.insertuser)
router.get('/api', ControllersPage.api)
router.get('/hello', authorization , ControllersPage.hello)
router.get('/logout', authorization , ControllersPage.logout)
//router.get('/sinup' , SendEmail , ControllersPage.sinup)
//router.get('/sinup' , ControllersPage.sinup)


 /*
  router.post('/post', verifyToken , (req , res) =>{
    jwt.verify(req.token , secret , (err,data) =>{
      if(err){
       res.sendStatus(403)
      } 
      res.status(200)
    res.json('... Post created ...end')
    })
  } )

  
  router.post('/token',(req , res) => {
  let user = {
    login : "admin",
    password : "admin"
  }
  if (req.body.login !== user.login){
    res.json({
      message : 'errer login'
    })
  }
  else{
    jwt.sign({user}, secret, (err,token) =>{
      if(err) {
        res.json(err)
      }
      res.json({token})
    })

  }   })

 
 function verifyToken (req , res , next){
  const BH = req.headers['authorization']
  if (typeof NH == 'undefined'){
    const bearer = BH.split(' ')
    const token = bearer[1]
    req.token = token  
    next()
  }
  else{
    res.sendStatus(403)
  }
}
*/


module.exports = router