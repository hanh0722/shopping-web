import { RouteObject } from "react-router-dom"
import First from "../First"
import NoMatch from "../NoMatch"
import Params from "../Params"

const routes: Array<RouteObject> = [
    {
        path: '/',
        element: <First/>,
    },
    {
        path: '/:id',
        element: <Params/>
    },
    {
        path: '*',
        element: <NoMatch/>
    }
]

export default routes;