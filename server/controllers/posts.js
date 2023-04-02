const posts = require('../models/posts');
const Post = require('../models/posts');
const slugify = require('slugify');

exports.create = async (req, res) => {
  const { title, content, user } = req.body;
  const slug = slugify(title);
  // validate
  switch (true) {
    case !title:
      return res.status(400).json({ error: 'Title is required' });
    case !content:
      return res.status(400).json({ error: 'Content is required' });
  }
  // create post
  try {
    const post = await Post.create({ title, content, user, slug });
    res.json(post);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: 'This is a duplicate post. Please create a new post' });
    } else {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }
};
// res.json ({
//     message: 'Success! See your server console'

//CRUD application functions from the server
//list the blogs posts from the 
exports.list = (req, res) => {
  Post.find({})
    .limit(10)
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Server error' });
    });
};
//read the posts
exports.read = (req, res) => {
  // console.log(req.params.slug)
  const { slug } = req.params

  Post.findOne({ slug })
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Server error' });
    });
};

//Allow user to update the blog posts
exports.update = (req, res) => {
  const { slug } = req.params;
  const { title, content, user } = req.body;

  Post.findOne({ slug }).exec()
    .then(post => {
      post.title = title;
      post.content = content;
      post.user = user;

      return post.save();
    })
    .then(() => {
      return res.json({
        message: 'Post updated successfully',
      });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({
        message: 'Error updating post',
        error: err,
      });
    });
};

//delete posts
exports.remove = (req, res) => {
  // console.log(req.params.slug)
  const { slug } = req.params

  Post.findOneAndRemove({ slug })
    .then((blogs) => {
      res.json({
        message: 'Post has been succesfully deleted'

      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Server error' });
    });
};














