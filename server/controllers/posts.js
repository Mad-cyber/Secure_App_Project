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

