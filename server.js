const express = require('express');
const mongoose = require('mongoose');
const app = express();








app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('view engine','ejs')
app.get("/" ,Home,(req,res) => {
    res
        .status(200)
        //.send('happy smile')
       // .json({"message":'life  peacefull life'})
       //.download('server.js')
        //.render('index' ,{message:'live happy and peacefully'})
        .render('index' ,{message:'live happy and peacefully'})
       
})




// midlilde ware 
function Home(req,res,next) {
  console.log(req.originalUrl + "Home")
  next();
}


const taskRoutes = require('./routes/taskRoutes')
app.use('/task' , taskRoutes)
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://siva07:TomatoTomato1@ac-5etidw9-shard-00-00.4xbkbsm.mongodb.net:27017,ac-5etidw9-shard-00-01.4xbkbsm.mongodb.net:27017,ac-5etidw9-shard-00-02.4xbkbsm.mongodb.net:27017/learn?replicaSet=atlas-q2eyuc-shard-0&ssl=true&authSource=admin").then(() => {

  app.listen(8000,()=>console.log('server started'))

})