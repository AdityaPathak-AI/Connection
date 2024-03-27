const fs = require("fs")

//Blocking Code Synchronous


const result = fs.readFileSync("contact.txt","utf-8");
console.log(result);
console.log("2");


//Non Blocking Code Asynchronous

fs.readFile("contact.txt","utf-8",(err,result)=>{
    console.log(result); 
})
 console.log("2");

