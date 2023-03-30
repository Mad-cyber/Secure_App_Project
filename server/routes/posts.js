const express = require('express');


const router = express.Router();

// import controller methods
const {create} = require('../controllers/posts');

router.post('/posts', create);

module.exports = router;