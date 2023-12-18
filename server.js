const express = require('express')
const app = express()
const mongoose  = require('mongoose')


app.post('/patient', (req,res) =>{
    console.log(req.body);
    res.send
})
await connectDB('mongodb://localhost:27017')
    
 
export const server = express()


server.use(express.json())

server.use("/patient", PatientRouter)