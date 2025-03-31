//here we are importing express using require method
let express=require("express")
//by using express and assigning to app for creation of server and to leverage the apis
let app= express()
let port=3002 // This the port number (actually processor at a particular device)
let counter=0;
//here we are defining apis and rountings
app.get("/",(req,res)=>{
res.status(200).json({counter:counter})
})
app.get("/increment",(req,res)=>{
counter+=1
res.status(200).json({counter:counter})
})
app.get("/decrement",(req,res)=>{
    counter-=1
    res.status(200).json({counter:counter})
})


//here we start the server by listening to calls
app.listen(port,()=>{
    console.log(`server is running at:${port} `)
})