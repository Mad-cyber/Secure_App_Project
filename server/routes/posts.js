const express = require('express');


const router = express.Router();

// import controller methods
const {create, list, read, update, remove} = require('../controllers/posts');
const {requireSignin} = require('../controllers/auth');

router.post('/posts', requireSignin, create);
router.get('/blogs', list);
router.get('/posts/:slug', read);
router.put ('/posts/:slug', requireSignin, update);
router.delete('/posts/:slug', requireSignin, remove);

// router.get('/secret', requireSignin, (req, res) =>{
//     res.json({
//         data: req.user.name
//     });



// });


module.exports = router;