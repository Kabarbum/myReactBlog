import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import {usePosts} from "../hooks/usePosts";
import MyButton from "../components/UI/Mybutton/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import MyInput from "../components/UI/MyInput/MyInput";
import MySelect from "../components/UI/Myselect/MySelect";
import Loader from "../components/UI/Loader/Loader";
import PostsPage from "../components/PostsPage";
import Pagination from "../components/UI/Pagination/Pagination";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [option, setOption] = useState([{value: 'title', name: 'Название'}, {value: 'body', name: 'Описание'},])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts()
    }, [page])

    const changePage = (el) => {
        setPage(el)

    }
    const removePost = (id) => {
        setPosts(posts.filter(el => el.id !== id))
    }
    const addPost = (post) => {
        setPosts([...posts, {...post, id: Date.now()}])
        setModal(false)
    }
    const sortPost = (sort) => {
        setFilter({...filter, sort})
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)} style={{margin: "20px 0"}}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm addPost={addPost}/>
            </MyModal>
            <div>
                <MyInput
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    placeholder='Поиск...'
                />
                <MySelect selectedSort={filter.sort} option={option} onChange={sortPost}/>
            </div>
            {
                postError &&
                <h1>произошла ошибка {postError}</h1>
            }
            {isPostLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}><Loader/></div>
                : sortedAndSearchedPosts.length
                    ? <PostsPage posts={sortedAndSearchedPosts} removePost={removePost}/>
                    : <h1 style={{textAlign: 'center'}}>Постов нет</h1>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}/>

        </div>
    );
};

export default Posts;