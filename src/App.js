import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import {useEffect, useState} from "react";
import Loader from "./components/UI/Loader/Loader";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [appIsLoading, setAppIsLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setAppIsLoading(false)
    }, [])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                {appIsLoading
                    ? <Loader/>
                    : <>
                        <NavBar/>
                        <AppRouter/>
                    </>
                }
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
