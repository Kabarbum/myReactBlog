import React, {useContext} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from "../components/UI/Mybutton/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext)
    const login = e => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth','auth')
    }
    const styles = {
        display:'flex',
        justifyContent:'center',
        flexDirection:'column'
    }
    return (
        <div>
            <h1>Страница для логина</h1>
            <form style={styles} onSubmit={login}>
                <MyInput placeholder='Введите логин...'/>
                <MyInput placeholder='Введите пароль...'/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;