const Posts = require ('../models/posts')
const slugify =require('slugify')


exports.create = (req, res) => {
    const {title, content, user} = req.body
    const slug = slugify(title)//My Post making the title all lower case

    //validate
    if(!title || !content ){

        return res.status(400).json({
            error:'Tile and content is required'
        });
    }
    res.json({
        message: 'Success! See server console'
    })
    // switch (true){
    //     case !title:
    //         return res.status(400).json ({error:'Title is required'});
    //         break;
    //     case !content:
    //         return res.status(400),json({ error: "Content is required!"});
    //         break;
    // }


//create post
    Posts.create({title, content, user, slug}, (err, post) => {
        if(err) {
            console.log(err)
            res.status(400).json({error: 'Duplicate post. Create new post'})

        }
        res.json(post);



    })

};


