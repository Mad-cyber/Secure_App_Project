import React, { useState } from 'react';
import axios from 'axios';


const Create = () => {

    const [state, setState] = useState({
        //default  for the event listener for the form submisson
        title: '',
        content: '',
        user: ''
    })

    //destrcute value from state
    const { title, content, user } = state;

    // state.title
    // state.content
    //https://github.com/axios/axios taken from github
    //onChange event handler
    const handleChange = (name) => (Event) => {
        console.log('name', name, 'event', Event.target.value);
        setState({ ...state, [name]: Event.target.value })
    }

    const handleSubmit = Event => {
        Event.preventDefault()
        //console.table({title, content, user});

        axios
        // taken from env file with local host added as REACT_APP_API
            .post(`${process.env.REACT_APP_API}/posts`, { title, content, user })
            //.post('http://localhost:8000/api/posts', { title, content, user })
            .then(response => {

                console.log(response)

                //  empty the state after submission    
                setState({ ...state, title: '', content: '', user: '' })
                //show success alert from the submission 
                alert(`Blog Post ${response.data.title} is created`)

            })

            .catch(error => {
                console.log(error.response)
                alert(error.response.data.error)
            })

    }

    return (

        <div className="container p-5">
            <h1> Create Blog Post</h1>
            <br />
            {JSON.stringify(state)}
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
                    <button className="btn btn-primary"> Create Blog Post </button>

                </div>

            </form>

        </div>

    );


}




export default Create;
