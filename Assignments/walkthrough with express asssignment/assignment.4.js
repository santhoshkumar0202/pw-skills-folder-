//here we are importing express using require method
let express=require("express")
//by using express and assigning to app for creation of server and to leverage the apis
let app= express()
let port=3004 // This the port number (actually processor at a particular device)

//here we are defining apis and rountings
app.get("/random",(req,res)=>{
res.status(200).json({random_no:Math.floor(Math.random()*(10))+1
})
})

//here we start the server by listening to calls
app.listen(port,()=>{
    console.log(`server is running at:${port} `)
})