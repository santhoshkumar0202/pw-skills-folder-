let http=require("node:http")//or ("http") can also be used
let port=3023;
let hostname="localhost"
let server=http.createServer((req,res)=>{
    if(req.url==="/"){
    res.statusCode=200
    res.setHeader("content-Type","Application/JSON")
    res.end(JSON.stringify({student:"santhosh"}))
    }else if(req.url=="/about"){
        res.write("it is about page")
        res.end()
    }else if(req.url=="/contact"){
        res.end("it is contact page")
    }else if(req.url=="/menu"){
        res.end("it is menu page")
    }else{
        res.statusCode=500
        res.end("error")
    }
    
    // res.end("This is santhosh's welcome page")
})


server.listen(port,()=>{
    console.log(`server is runnning at ${hostname}:${port}`)
})

