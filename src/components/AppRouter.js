import '../styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import NavBar from "../components/UI/NavBar/NavBar";
import {privateRoutes, publicRoutes, routes} from "../router/routes";
import Login from "../pages/Login";
import {useContext} from "react";
import {AuthContext} from "../context";

function AppRouter() {
    const {isAuth} = useContext(AuthContext)
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(el =>
                    <Route
                        path={el.path}
                        element={el.element}
                        exact={el.exact}
                        key={el.path}
                    />
                )}
                <Route path="*" element={<Posts/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(el =>
                    <Route
                        path={el.path}
                        element={el.element}
                        exact={el.exact}
                        key={el.path}
                    />
                )}
                <Route path="*" element={<Login/>}/>
            </Routes>
    );
}

export default AppRouter;
