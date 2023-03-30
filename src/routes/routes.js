import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import NotFound from "../Pages/Shared/Header/NotFound/NotFound";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path:'*',
        element: <NotFound></NotFound>
    }
])
export default routes;