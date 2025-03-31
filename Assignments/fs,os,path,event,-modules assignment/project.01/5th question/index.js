let fs = require("fs")


fs.readFile("nodejs_architecture.txt",(error,data)=>{
    if(error){
         console.log("error")
    }
    console.log(data.toLocaleString())
})


fs.appendFile("nodejs_architecture.txt","Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/0 operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.Compared to other server-side languages, Node js has distinct vantages. Its asynchronous model and non-blocking I/0 operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple framework and makes the development process easier.",(error)=>{
if(error){
    console.log("error occured while appending the text")
}
console.log("successfully appended the text")
})

//5th question answer will be here just below will be logged successfull up on deletion success


fs.unlink("nodejs_architecture.txt",(error)=>{
    if(error){
        console.log("error while deleting the file")
    }
    console

})