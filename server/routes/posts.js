const express = require('express');


const router = express.Router();

// import controller methods
const {create, list} = require('../controllers/posts');

router.post('/posts', create);
router.get('/blogs', list);

module.exports = router;