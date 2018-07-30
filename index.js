const express = require('express');

const app = express();

// View Engine - Pug
app.set('view engine', 'pug');


// Assets
app.use(express.static('public'))

// Routes

app.get('/', function (req, res) {
  res.render('index')
})


// List all categories

app.get('/categories', function (req, res) {
  res.render('category-list')
})

// Create Category

app.get('/category/create', function (req, res) {
  res.render('create-category')
})

// View a Category

app.get('/category/:id', function (req, res) {
  res.render('category')
})

// Delete a category

app.get('/category/:id/delete', function (req, res) {
  res.render('delete-category')
})

// List all blog posts

app.get('/blog', function (req, res) {
  res.render('blog-list')
})

// Create a blog post

app.get('/blog/create', function (req, res) {
  res.render('create-blog')
})

// Read a blog post

app.get('/blog/:id', function (req, res) {
  res.render('blog')
})

// Delete a blog post

app.get('/blog/:id/delete', function (req, res) {
  res.render('delete-blog')
})




const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server has started on Port ${port} !`));