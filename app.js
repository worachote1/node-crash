const express = require('express')

//express app
const app = express()

//register view engine
app.set('view engine','ejs')


//listen for request
app.listen(3000)
app.get('/',(req,res)=>{
    //res.send('<p>home page</p>');
    const blogs = [
        {title:"Yoshi finds eggs",snippet:'lorem 124'},
        {title:"Mario finds stars",snippet:'lorem 124'},
        {title:"How to binsaig",snippet:'lorem 124'}
    ]
    res.render('index',{
        title : "44Home" , AllBlogs : blogs
    })
});
app.get('/about',(req,res)=>{
    //res.send('<p>about page</p>');
    res.render('about',{
        title : "44About"
    })
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{
        title : "44Create"
    })
})

//404 page
app.use((req,res)=>{
    res.status(404).render('404',{
        title : "NotFound44"
    })
})

