const { constants } = require("buffer");
const { Console } = require("console");
const path = require("path"); //using path module using require("") method

console.log("sep",path.sep)
console.log(process.env.path)
console.log("path.delimiter >",path.delimiter)
const currentfile=__filename  // it returns the current file path
console.log("current file >",currentfile)

console.log("basename >",path.basename(currentfile)) // it return "index.js" basically base is the combination of file name and extension;


console.log(path.basename(currentfile))
console.log(path.basename(currentfile,".js"))
console.log(path.extname(currentfile)) //retuns .js--extension

console.log(path.format({dir:"PS C:\\Users\\santh\\desktop\\pw skills",base:"index.js"}));
console.log(path.join("c","Users","Desktop","pw skills"))

console.log(path.parse(currentfile))
console.log(path.isAbsolute("C:\\Users\\santh\\desktop\\pw skills\\index.js"))
console.log(path.normalize("PS C:\Users\santh\desktop\/\pw skills///\index.js"))
console.log(path.resolve(currentfile))
console.log(path.dirname(currentfile))
console.log("relative:",path.relative("C:\\Users\\santh\\Desktop\\pw skills", "C:\\Users\\santh\\Desktop\\pw skills\\pwnode-js\\3.path\\index.js"));
// Output: pwnode-js\3.path\index.js

