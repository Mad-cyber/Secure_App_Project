import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';

const SinglePost = (props) => {
  const [posts, setPosts] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/posts/${props.match.params.slug}`)
      .then(response => setPosts(response.data))
      .catch(error => alert('Error loading single post'));
  }, [props.match.params.slug]);

  return (
    <div className="container pb-5">
      <Nav />
      <br />
      {posts && (
        <React.Fragment>
          <h1>{posts.title}</h1>
          <hr />
          <p className='lead'>{posts.content.substring(0, 100)}</p>
          <p>Blog Author <span className='"badge badge-info"'>{posts.user}</span> Published on {''}
            <span className='"badge badge-info"'>{new Date(posts.createdAt).toLocaleString()}</span> </p>
        </React.Fragment>
      )}
      {!posts && <p>Loading...</p>}
    </div>
  );
};

export default SinglePost;
