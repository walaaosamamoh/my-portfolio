import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        index: true,
        element: <Home/>
    },
    {
        path: "/projects/:slug",
        element: <ProjectDetails />
    },
    {
        path: "*",
        element: <NotFound />
    }
])
