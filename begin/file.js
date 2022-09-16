const fs = require('fs')

//reading files
fs.readFile("./doc/blog1.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    //get data in buffer form
    //console.log(data)
    console.log(data.toString())
})

console.log("last line")