//here we are importing express using require method
let express=require("express")
//by using express and assigning to app for creation of server and to leverage the apis
let app= express()
let port=3003 // This the port number (actually processor at a particular device)

//here we are defining apis and rountings
app.get("/",(req,res)=>{
res.status(200).json({message:"i am home page"
})
})
app.get("/about",(req,res)=>{

res.status(200).json({message:"i am about page"})
})
app.get("/email",(req,res)=>{
    
    res.status(200).json({message:"support@pwskills.com"})
})


//here we start the server by listening to calls
app.listen(port,()=>{
    console.log(`server is running at:${port} `)
})