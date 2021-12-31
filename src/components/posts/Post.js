import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
const Post = () => {
        const[ post, setPost] = useState({
            userId: "",
            id:"",
            title: "",
            body: "",
        })

        const {id} = useParams();
        useEffect(()=> {
            loadPost();
        },[])

        const loadPost = async() => {
            const res = await axios.get(`http://localhost:3002/posts/${id}`);
            setPost(res.data);
        }
    return (
        <div className="container py-4">
        <Link className="btn btn-primary" to="/">
          back to Home
        </Link>
        <h1 className="display-4">User Id: {post.userId}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">id: {post.id}</li>
          <li className="list-group-item">post title: {post.title}</li>
          <li className="list-group-item">body: {post.body}</li>
        </ul>
      </div>
    );
}

export default Post;
