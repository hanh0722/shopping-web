import { RouteObject } from "react-router-dom";
import Login from '../view/Login';
import { LOGIN } from "../../constants/routes";

const routes: Array<RouteObject> = [
    {
        path: LOGIN,
        element: <Login/>,
    },
]

export default routes;