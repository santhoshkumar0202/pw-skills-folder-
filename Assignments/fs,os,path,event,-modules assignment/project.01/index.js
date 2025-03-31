//1st question answer asked i have created or initiated the npm init and created package.json file  

/*2. ans for In the same project directory created in the above assignment, your task is to create a new file index.js and
using the fs module add information about Node.js architecture to a new file nodejs_architecture.txt. Below
are the expected files in the project folder is below.*/
// using fs model to read,append,delete or unlink file
let fs = require("fs")

//3. answer for question 3 we have read the file with the help of fs module
// fs.readFile("nodejs_architecture.txt",(error,data)=>{
//     if(error){
//          console.log("error")
//     }
//     console.log(data.toLocaleString())
// })
//th question answer is below

// fs.appendFile("nodejs_architecture.txt","Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/0 operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.Compared to other server-side languages, Node js has distinct vantages. Its asynchronous model and non-blocking I/0 operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple framework and makes the development process easier.",(error)=>{
// if(error){
//     console.log("error occured while appending the text")
// }
// console.log("successfully appended the text")
// })

//5th question is solved in sepaerate folder called 5th question please kindly look into it

// let os= require("os")
// for 6th question we have used os module to solve this

// console.log("release of os",os.release())

// console.log("operation os name",os.type())

//7th question answer
// let http=require("http")


// let server= http.createServer((req,res)=>{
//     if(req.url=="/"){
//         res.write("<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>")
//        res.end()
//     }
//     console.log("sucessfully running the server on 5004")
// })

// server.listen(5004)

//8th question answer:-
let EventEmitter=require("events")

let evenemitter= new EventEmitter()


evenemitter.on("subscribe",(insti)=>{
    console.log("Thanks for submiting to "+ insti)
})

evenemitter.emit("subscribe", "college wallah") // ("event","input or argument to the listner")

//9th. as 9th question given after observing the removing listner like even the status is fire there no listner
let st_check=()=>{
    console.log("active")
}
evenemitter.on("status",st_check)
console.log("after status")
evenemitter.emit("status")
console.log("after status")

evenemitter.removeListener("status",st_check)

evenemitter.emit("status")


//10th question answer
console.log("The Default Maximum Number Of Event Listner",evenemitter.getMaxListeners()) // it returns 10 as a max listners
//lets  make it to 5 using setdeafault

evenemitter.setMaxListeners(5)
console.log("The Updated Maximum Number Of Event Listner",evenemitter.getMaxListeners())



// let name ="santhosh kumar singuru"


// let li=name.split("")
// console.log(li)
// let count=0
// //console.log(li)

// for(i=0;i<li.length;i++){
//    if(name[i]==""){
//     continue ;
//    }
//     count++;
// }
// console.log(count)

