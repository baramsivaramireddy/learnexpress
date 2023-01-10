const express = require('express')
const taskModel = require('../models/taskModel')

const getAllTasks = async () => {
    return await taskModel.find()
}
const router = express.Router()
// router.use(logger)
router.route('/')
            .all((req,res,next) => {
                
                next();
            })

            .get(async (req,res) => {
              let  tasks = await getAllTasks()
              let allTasks = []
              
              for (  const task in tasks )
                {
                    
                    allTasks.push(tasks[task]['name'])
                }

                res.render('task', {
               
                     Tasks : allTasks }
                     )
            })
            .post((req,res) => {


               let newTask =  new taskModel({
                    name : req.body.task
                })
            
                newTask.save()

                res.redirect('/task')
            })

            .put((req,res) => {
                res.send("update task")
            })
            .delete((req,res) => {
                res.send('delete task')
            })





router.route('/:id')
            .get((req,res) => {
                console.log(`task with id ${req.params.id}` )
                res.send(`task with id ${req.params.id}`)
            })

module.exports = router


// midlilde ware 
function logger(req,res,next) {
    console.log(req.originalUrl)
    next();
}