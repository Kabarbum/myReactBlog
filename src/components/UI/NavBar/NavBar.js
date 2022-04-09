import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../context";
import MyButton from "../Mybutton/MyButton";

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = ()=>{
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <nav>
            <div className='nav'>
                <NavLink to={'/'} className="logo">
                    <img
                        src="https://phonoteka.org/uploads/posts/2021-07/1625622586_52-phonoteka-org-p-yenot-art-krasivo-53.jpg"
                        alt="logo"/>
                </NavLink>
                <div className="nav__menu">
                    <NavLink to={'/posts'}>Посты</NavLink>
                    <NavLink to={'/about'}>Обо мне</NavLink>
                    {
                        isAuth
                            ? <NavLink to={'/login'} onClick={logout}>Выйти</NavLink>
                        : null}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;