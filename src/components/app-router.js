import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { JunardVillahermosa } from "../pages/junardvillahermosa";

const AppRouters = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <JunardVillahermosa />,

        },
    ]);
    return <RouterProvider router={router} />;
}

export default AppRouters;