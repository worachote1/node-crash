const express = require('express')
//const Blog = require('../models/blog');
const blogController = require('../controller/blogController')
const router = express.Router();


// blog routes
router.get('/', blogController.blog_index);

//POST Controller
router.post('/', blogController.blog_create_post);

//Get create Form page section
router.get('/create',blogController.blog_create_get);

//Get each specific blog when click to read
router.get('/:id', blogController.blog_details);

//DELETE Controller
router.delete('/:id', blogController.blog_delete);

module.exports = router