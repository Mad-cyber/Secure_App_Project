import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import axios from 'axios';

const App = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = () => {
        axios.get(`${process.env.REACT_APP_API}/blogs`)
            .then(response => {
                console.log(response);
                setBlogs(response.data);
            })
            .catch(error => {
                console.log(error);
                alert('Cannot fetch blog posts');
            });
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="container pb-5">
            <Nav />
            <br />
            <h1>NCI SMART LOGIN</h1>
            <hr/>
            {
                blogs.map((posts, i) => (
                    <div className='row'key={posts._id} style={{borderBottom: '2px solid black'}}>
                        <div className='col pt-3 pb-2'>
                          <h2>{posts.title}</h2>  
                          <p className='lead'>{posts.content.substring(0, 100)}</p>
                          <p>Blog Author <span className='"badge badge-info"'>{posts.user}</span> Published on {''} <span className='"badge badge-info"'>{new Date (posts.createdAt).toLocaleString()}</span> </p>
                        </div>
                    </div>


                ))


            }

        </div>
    );
};

export default App;

