
const express=require('express')
const app=express()


const dummy=require('./routes/getbadgeinfo')

app.use('/api',dummy)

app.use((req,res)=>{
    res.send({
        message:"You have entered invalid url please enter hostname/api/hackerrankid"
    })
})

app.listen(3000,()=>{
    console.log("Running on port 3000")
})


//console.log(name)