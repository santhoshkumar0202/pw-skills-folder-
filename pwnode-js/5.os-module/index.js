// let os = require("os")

// console.log("archtecture of os",os.arch())
// console.log("freespace of memory",os.freemem())
// console.log("total free memeory",os.totalmem())
// console.log("netwrok interfaces",os.networkInterfaces())
// console.log("temp dir in os",os.tmpdir())
// console.log("endianness type(order of storing bytes be or le)",os.endianness())
// console.log("host name of os",os.hostname())
// console.log("type",os.type())
// console.log("relase or version of os",os.release())
// console.log("platform of",os.platform())


function one(){
    return 1;
}
function two(){
    return 2
    ; 
}

let a=(one(),two())


console.log(a)