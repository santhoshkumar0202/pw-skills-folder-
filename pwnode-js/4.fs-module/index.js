const { error } = require("console");
var fs= require("fs");
const { buffer } = require("stream/consumers");

// var data=fs.readFileSync(`input.txt`)

// console.log(data.toString())

// console.log("start")

// fs.readFile("input.txt",(error,data)=>{
// if(error){
//     console.log("error has occured")
// }else{
//     console.log("asynch read",data.toString())
// }
// })
// console.log("end")

// fs.writeFile("input.txt","good morning and thank you all",(error,data)=>{
//     if(error){
//         console.log("error")
//     }else{
//         console.log("sucessfully written to the file")
//     }
// })

// fs.appendFile("input.txt","bye \n guys","utf-8",(error,data)=>{
//        if(error){
//            console.log("error")
//        }else{
//            console.log("sucessfully appende to the file")
// //        }})
// let buff=new Buffer(1024)
// fs.open("input.txt","r+",function(error,fd){
//     if(error){
//         console.log("error while opening the file")
//     }
//         console.log("successfully opened")
//         console.log("reading the file")
    
//         fs.read(fd,buff,0,buff.length,0,(err,bytes)=>{
//             if(err){
//                 console.log("error while reading the file")
//             }{
//               console.log(bytes+" bytes read")
//             }
            
//             if(bytes>0){
//                 console.log(buff.slice(0,bytes).toString())
//             }
//             fs.close(fd,(error)=>{
//                 if(error){
//                     console.log("error");
//                 }
//                 console.log("sucessfully closed")
                
//             })
//         })
        
// })

fs.unlink("input.txt",(error)=>{
    if(error){console.log("error")
}else{
    console.log("successfully deleted")
}})


