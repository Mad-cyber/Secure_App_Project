import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
import { getToken } from './helpers';

const UpdatePost = (props) => {
    const [state, setState] = useState({
        title: '',
        content: '',
        slug: '',
        user: ''
    })

    const { title, content, slug, user } = state;

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/posts/${props.match.params.slug}`)
            .then(response => {
                if (response && response.data) {
                    const { title, content, slug, user } = response.data
                    setState({ ...state, title, content, slug, user })
                }
            })
            .catch(error => alert('Error update post'));
    }, [props.match.params.slug]);


    const handleChange = (name) => (Event) => {
        console.log('name', name, 'event', Event.target.value);
        setState({ ...state, [name]: Event.target.value })
    }

    const handleSubmit = Event => {
        Event.preventDefault()
        //console.table({title, content, user});

        axios.put(`${process.env.REACT_APP_API}/posts/${slug}`, { title, content, user }, {
            headers: {
                authorization: `Bearer ${getToken()} ` 
            }

        })
        .then(response => {
            if (response && response.data) {
                console.log(response)
                const { title, content, slug, user } = response.data
                setState({ ...state, title, content, slug, user });
                alert(`Blog Post ${title} is Updated`)
            }
        })
        .catch(error => {
            console.log(error.response)
            alert(error.response.data.error)
        })
    

    }


    const showUpdateForm = () => (

        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label className='text-muted'>Title</label>
                <input onChange={handleChange('title')} value={title} type="text" className='form-control' placeholder="Blog Post Title" required />
            </div>

            <div className='form-group'>
                <label className='text-muted'>Blog Content</label>
                <textarea
                    onChange={handleChange('content')}
                    value={content}
                    type="text"
                    className='form-control'
                    placeholder="Write Blog Post Content"
                    required
                />
            </div>

            <div className='form-group'>
                <label className='text-muted'>User</label>
                <input onChange={handleChange('user')} value={user} type="text" className='form-control' placeholder="Blog Writer" required />
            </div>

            <div>
                <button className="btn btn-primary"> Update Blog Post </button>

            </div>

        </form>

    )

    return (
        <div className="container pb-5">
            <Nav />
            <br />
            <h1>UPDATE POST</h1>
            {showUpdateForm()}


        </div>
    );
};

export default UpdatePost;
