const http = require('http')
const fs = require('fs')
const _ = require('lodash')
const server = http.createServer((req,res)=>{
    console.log("Request made")    
    // console.log(req)
    // console.log(req.url)
    // console.log(req.method)

    //lodash
    const num = _.random(0,44)
    console.log(num)

    //send response to browser
    res.setHeader('Content-Type','text/html')
    // res.write("data")
    // res.end()    
    
    //Routing
    let path = './views/'
    switch(req.url){
      case '/':
        path+='index.html'
        res.statusCode = 200;
        break;
      case '/about':
        path+='about.html'
        res.statusCode = 200
        break;

      default:
        path+='404.html'
        res.statusCode = 404
        break;
    }

    //send an html file
    fs.readFile(path,(err,data)=>{
      if(err){
        console.log(err)
        res.end()
      } else{
        res.write(data)
        res.end()
      }
    })

})

server.listen(3000,'localhost',()=>{
    console.log("Now , Server is Listening  for Request on port 3000")
})