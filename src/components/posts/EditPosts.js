import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from "axios";
const EditPost = () => {
    let history = useHistory();
    const {i} = useParams();
    const[ post, setPost] = useState({
        userId: "",
        id: "", 
        title: "",
        body: "",

    })
    const { userId,id,title, body} = post;
    const onInputChange  = e =>{
        setPost({...post, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        loadPosts();
    },[]);
    const onSubmit = async (e) =>
    {
        e.preventDefault();
        await axios.put(`http://localhost:3002/posts/${i}`,post);
        history.push("/");

    }

    const loadPosts = async () => {
        const result = await axios.get(`http://localhost:3002/posts/${i}`);
        console.log(result);
        setPost(result.data);

    }
    return (
        <div>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit Post</h2>
                    <form onSubmit={e=> onSubmit(e)}>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control form-control-lg my-4"
                                placeholder="Enter Your userId"
                                name="userId"
                                value={userId}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control form-control-lg my-4"
                                placeholder="Enter Your id"
                                name="id"
                                value={id}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg my-4"
                                placeholder="Enter the title"
                                name="title"
                                value={title}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg my-4"
                                placeholder="Enter the body"
                                name="body"
                                value={body}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <button className="btn btn-warning btn-block">Update Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditPost;
