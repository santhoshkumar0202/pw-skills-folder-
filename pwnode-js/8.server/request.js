const http=require("http")
//const { hostname } = require("os")
const options={
    hostname:"api.escuelajs.co",
    path:"/api/v1/products",
    method:"GET"
}
const req=http.request(options,(res)=>{
    res.on("data",(d)=>{
        process.stdout.write(d)
    })
})
// const req = http.request(options, (res) => {
//     console.log("Response Status Code:", res.statusCode);
//     let data = '';
//     res.on("data", (chunk) => {
//       data += chunk;
//     });
  
//     res.on("end", () => {
//       console.log("Response received:", data);
//     });
//   });
  
req.on("error",(e)=>{
    console.log(e)
})

req.end();