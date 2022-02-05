import { RouteObject } from "react-router-dom";
import Login from '../view/Login'
import { LOGIN, REGISTER } from "../../constants/routes";
import Register from "../view/Register";

const routes: Array<RouteObject> = [
    {
        path: LOGIN,
        element: <Login/>,
    },
    {
        path: REGISTER,
        element: <Register/>
    }
]

export default routes;