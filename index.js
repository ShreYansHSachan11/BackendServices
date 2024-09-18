require('dotenv').config()
const express=require ('express')
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send("HEllo Backend")
})

app.get('/login', (req,res)=>{
    res.send('<h1>please login at my backend</h1>')
})

app.get('/chai',(req,res)=>{
    res.send("chai peelo guys")
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${port}`)
})
