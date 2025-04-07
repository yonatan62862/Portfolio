import { Route, Routes } from "react-router-dom";
import { useScrollTop } from "../../Hooks/useScrollTop";
import Main from "../Home/Main";
import Page404 from "./page404/page404";
import Unicite from "../../components/Projects/unicite";
import Eventify from "../../components/Projects/eventify";
import MovieClub from "../../components/Projects/movieclub";

type webRoute = {
  path: string;
  element: JSX.Element;
};

const routes: webRoute[] = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/home",
    element: <Main />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
  {
    path: "/projects/unicite",
    element: <Unicite />,
  },
  {
    path: "/projects/eventify",
    element: <Eventify />,
  },
  {
    path: "/projects/movieclub",
    element: <MovieClub />,
  },
];

function Routing(): JSX.Element {
  useScrollTop();

  return (
    <div className="dark:bg-dark-second">
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}

export default Routing;
