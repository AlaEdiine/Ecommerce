const { utilisateur } = require("../Models/_user")

module.exports.Find = async (req , res) =>{
 
    let Email = req.body.form
    console.log(Email)
  const result = await utilisateur.find({ Email : Email} , (err , docs)=>{
    console.log(docs)
  })
if(!result) return res.status(401).json("error search")
// console.log(result)
        return res.json("Good Job") 
  }

  module.exports.api = (req , res) =>{
      insertuser.find((err , respo) =>{
        if (err) throw err
        res.send(respo)
      })
  }
