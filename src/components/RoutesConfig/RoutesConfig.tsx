import { RouteObject } from "react-router-dom";
import RegisterForm from '../view/Login'
import { LOGIN } from "../../constants/routes";

const routes: Array<RouteObject> = [
    {
        path: LOGIN,
        element: <RegisterForm/>,
    },
]

export default routes;