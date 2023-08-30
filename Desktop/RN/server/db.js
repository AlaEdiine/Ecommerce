const mongoose    = require('mongoose')
const url = 'mongodb://localhost:27017/newdata'

mongoose.connect(url , 
  {
    useNewUrlParser: true,
     useUnifiedTopology: true
  
    }).then(con =>{
  
   if (con){
    console.log('Succed MongoDB Connected in 0.005 ms')
   }
   else {
    console.log("Error connected MongoDB")
   }
    
    })


