let http =require("http")


let server = http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.write("<h1>hello world!</h>")
    }

    if(req.url==="/about"){
        res.write("<h1>about</h>")
    }
    res.end()
});
console.log("server is ready 01")
server.listen(5001);
