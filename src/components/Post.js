import React from 'react';
import MyButton from "./UI/Mybutton/MyButton";
import {useNavigate} from "react-router-dom";

const Post = ({post, removePost}) => {

    const navigate = useNavigate()

    return (
        <div className='post'>
            <div>
                <h6>{post.id}</h6>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <MyButton style={{marginRight: 5}} onClick={() => {
                    navigate('/posts/' + post.id)
                }}>просмотр</MyButton>
                <MyButton onClick={() => removePost(post.id)}>&#10006;</MyButton>
            </div>
        </div>
    );
};

export default Post;