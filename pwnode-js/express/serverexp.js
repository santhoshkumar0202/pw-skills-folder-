const express= require(`express`)

const app=express()

const port=3003


app.get("/",(req,res)=>{
    res.send("hello world!")
})
app.get("/about",(req,res)=>{
    res.send("about!")
})
app.get("/contact",(req,res)=>{
    res.send(`<h1 style="color:red;">contact</h1>`)
})
app.get("/support",(req,res)=>{
    res.send("support!")
})



app.listen(port,()=>{
    console.log(`listening at ${port}`)
})