const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
//express app
const app = express()
//connect to mongoDB
const dbURI ='mongodb+srv://worachote:232903@cluster0.r5ufrlg.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>{
        console.log("connect to db")
        //listen for request aftermconection to database is complete
        app.listen(3000)
    }
    )
    .catch((err)=>{console.log(err)})
//register view engine
app.set('view engine','ejs')

//middleware and static files
app.use(express.static('public'))
app.use(morgan('dev'))

//routes
app.get('/',(req,res)=>{
    res.redirect('/blog')
});
app.get('/about',(req,res)=>{
    //res.send('<p>about page</p>');
    res.render('about',{
        title : "44About"
    })
});

//blog routes
app.get("/blog",(req,res)=>{
    //find all document inside Blog collection
    //and sort the Newest blog in the first
    Blog.find().sort({createdAt : -1})
    .then((result)=>{
        res.render('index',{title: "All Blog 44prn",AllBlogs: result })
    })
    .catch((err)=>{
        console.log(err)
    })
})

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

