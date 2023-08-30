const { insertuser } = require("../mongoSchema")

module.exports.insertuser = (req , res) =>{
 
    let nameUser = req.body.nameUser
    let adresseuser = req.body.adresseuser
    let phoneuser = req.body.phoneuser
    let autreinfo = req.body.autreinfo
    let PostNvform  = {
      nameUser: nameUser,
      adresseuser: adresseuser,
      phoneuser : phoneuser ,
      autreinfo : autreinfo
    }
    insertuser.insertMany(PostNvform , (err , docs) => {
      if (err) throw err
        return res.json(docs[0]._id) 
    })
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