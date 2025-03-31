// let EventEmitter=require("events");

// let eventemitter1 = new EventEmitter()
// let eventemitter2 = new EventEmitter()


// // eventemitter.on("greet",()=>{
//     console.log("hello everybody")
// })

// // eventemitter.emit("greet")

// eventemitter.on("greet",(name)=>{
//     console.log("hello"+" "+ name )
// })

// eventemitter.emit("greet","santhosh")
//  fun=()=>{ console.log("nothing to say2")}
    

// eventemitter.once("say",()=>{ console.log("nothing to say")}
// )
// eventemitter.on("say",fun)

// eventemitter.emit("say")

// eventemitter.emit("say")

// eventemitter.removeListenerall("say",fun)
//     eventemitter.emit("say")

// console.log(eventemitter1.getMaxListeners())
// console.log(eventemitter2.getMaxListeners())
// eventemitter1.setMaxListeners(2);

// console.log("after settting limiter \n",eventemitter1.getMaxListeners())
// console.log(eventemitter2.getMaxListeners())


// // for(i=0;i<4;i++){
// //     eventemitter1.on("myeve",fun)
// // }

// for(i=0;i<4;i++){
//     eventemitter2.on("myeve",fun)
// }

// eventemitter2.emit("myeve")


// eventemitter2.removeAllListeners("myeve")
// eventemitter2.emit("myeve")
// eventemitter2.emit("myeve")

// kick1=()=>{
//     console.log("1st handler")
// }

// kick2=()=>{
//     console.log("2st handler")
// }
// eventemitter1.on("view",kick1)
// eventemitter1.prependListener("view",kick2)


// eventemitter1.emit("view")

let EventEmitter = require("events");

let eventemitter = new EventEmitter();

// Listen for the 'newListener' event
eventemitter.on('removeListener', (event, listener) => {
    console.log(`A new listener was added for the event: ${event}`);
    // You can do something special when a new listener is added.
});

// Add listeners for a custom event
eventemitter.on("greet", () => {
    setImmediate(()=>{
    console.log("Hello, world!")})
});

// Add another listener for the 'greet' event
eventemitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
eventemitter.emit("greet", "Santhosh");
//eventemitter.removeAllListeners("greet")
