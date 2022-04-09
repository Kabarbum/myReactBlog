import React, {useState} from 'react';
import MyButton from "./UI/Mybutton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const PostForm = ({addPost}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const createPost = (e) => {
        e.preventDefault()
        setPost({title: '', body: ''})
        addPost(post)
    }
    return (
        <form className='post-form'>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"/>
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"/>
            <MyButton style={{alignSelf: 'flex-end'}} onClick={createPost}>Добавить</MyButton>
        </form>
    );
};

export default PostForm;