import React from 'react';
import Post from './Post'

const PostsPage = ({posts, removePost}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Посты</h1>
            {posts.map(post =>
                <Post post={post} removePost={removePost} key={post.id}/>
            )}

        </div>
    );
};

export default PostsPage;