import { Route, Routes } from "react-router-dom";
import { useScrollTop } from "../../Hooks/useScrollTop";
import Main from "../Home/Main";
import Page404 from "./page404/page404";
import Unicite from "../../components/Projects/unicite"

type Route = {
    path: string;
    element: JSX.Element
}

const routes: Route[] = [
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/home",
        element: <Main />
    },
    {
        path: "*",
        element: <Page404 />
    },
    {
        path: "/projects/unicite",
        element: <Unicite />
    },
]


function Routing(): JSX.Element {
    useScrollTop();

    return (
        <div className="dark:bg-dark-second">
            <Routes>
                {routes.map
                    (({ path, element }) =>
                        <Route key={path} path={path} element={element}
                        />
                    )}
            </Routes>
        </div>
    );
}

export default Routing;