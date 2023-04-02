import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    const deleteConfirm = (slug) => {
        let answer = window.confirm('Are you Suer you want to delete this post?')
        if(answer) {
            deletePost(slug)

        }
    }

    const deletePost = (slug) => {
        //console.log('delete', slug, ' blog post' );
        axios.delete(`${process.env.REACT_APP_API}/posts/${slug}`)
        .then(response => {
            alert(response.data.message)
            fetchBlogs()
        })
        .catch(error => alert('Error deleteing post ' ));
    };

    return (
        <div className="container pb-5">
            <Nav />
            <br />
            <h1>NCI SMART LOGIN</h1>
            <hr/>
            {
                blogs.map((posts, i) => (
                    <div className='row'key={posts._id} style={{borderBottom: '2px solid black'}}>
                        <div className="col pt-3 pb-2">
                        <div className="row">
                            <div className="col-md-10">
                                <Link to={`/posts/${posts.slug}`}>
                                    <h2>{posts.title}</h2>
                                </Link>
                                <p className="lead">{posts.content.substring(0, 100)}</p>
                                <p>
                                    Author <span className="badge-dark">{posts.user}</span> Published on{' '}
                                    <span className="badge-dark">{new Date(posts.createdAt).toLocaleString()}</span>
                                </p>
                            </div>

                            <div className="col-md-2">
                                <Link to={`/posts/update/${posts.slug}`} className="btn btn-warning">
                                    Update
                                </Link>
                                <button 
                                onClick={() => deleteConfirm(posts.slug)} 
                                className="btn btn-danger"> 
                                Delete</button>
                            </div>
                        </div>
                    </div>
                    </div>


                ))


            }

        </div>
    );
};

export default App;

