import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from "axios";
const Addpost = () => {
    let history = useHistory();
    const[ post, setPost] = useState({
        userId: "",
        id:"",
        title: "",
        body: "",

    })
    const { userId,id,title, body} = post;
    const onInputChange  = e =>{
        setPost({...post, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) =>
    {
        e.preventDefault();
        await axios.post("http://localhost:3002/posts",post);
        history.push("/");

    }
    return (
        <div>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add A Post</h2>
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
                        <button className="btn btn-primary btn-block">Add Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Addpost;
