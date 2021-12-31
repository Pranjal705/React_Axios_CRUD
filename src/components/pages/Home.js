import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from "axios";
const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts();
    }, []);


    const loadPosts = async () => {
        const result = await axios.get("http://localhost:3002/posts");
        setPosts(result.data.reverse());
    }

    const deletePost = async id => {
        await axios.delete(`http://localhost:3002/posts/${id}`);
        loadPosts();
    } 
    return (
        <div className="container ">
            <div className="py-4">
                <h1>Home Page</h1>
                <Table striped borderless hover >
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post, index)=>(
                                <tr>
                                    <th scope="row">{post.userId}</th>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td>
                                        <Link class="btn btn-primary outline-dark my-2"to={`/posts/${post.id}`}>View</Link>
                                        <Link class="btn btn-outline-primary my-2" to={`/posts/edit/${post.id}`}>Edit</Link>
                                        <Link class="btn btn-danger" onClick={()=>deletePost(post.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Home;
