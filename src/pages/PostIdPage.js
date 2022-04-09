import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPosts] = useState(null)
    const [comments, setComments] = useState([])
    const [fetchingPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getPostById(params.id)
        setPosts(response.data)
    })
    const [fetchingCommentsByPostId, isCommentsLoading, commentsError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchingPostById()
        fetchingCommentsByPostId()
    }, [params.id])

    return (
        <div style={{width: 800}}>
            {isLoading
                ? <Loader/>
                : <div style={{margin: '20px 0'}}>
                    <h1>Post {post?.id}. {post?.title}</h1>
                    <div>{post?.body}</div>
                </div>
            }
            <hr/>
            {isCommentsLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 10, border: '3px solid lightblue', padding: 10}}>
                            <h3>{comm.id}. {comm.email}</h3>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;