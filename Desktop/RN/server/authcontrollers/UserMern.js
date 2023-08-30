const { insertuser , employee} = require("../mongoSchema")

module.exports.delete = async (req , res) =>{
 
    let id = req.body.BLOCK
    console.log(id)
   await employee.remove({ _id : id})

        return res.json("Good Job") 
  }

  module.exports.api = (req , res) =>{
      insertuser.find((err , respo) =>{
        if (err) throw err
        res.send(respo)
      })
  }

  module.exports.hello = (req , res) =>{
    res
        .status(200)
        .render('hello', {
          message : 'login submitted'
          })
  }

  module.exports.test = (req , res) =>{
 
    res.status(200)
    res.render('test', {
      message : ''
  })
  
//res.json({users: { login: req.login , password: req.password }})
 // console.log({ users: { login: req.login , password: req.password } })
 //console.log(req.login)
  }

  module.exports.logout = (req , res) =>{
    return res
                .clearCookie("access_token")
                .status(200)
                .render('bab' , {
                    message : 'bon retour'
                })
  }