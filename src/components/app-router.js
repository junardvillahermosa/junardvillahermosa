import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { JunardVillahermosa } from "../pages/junardvillahermosa";

const AppRouters = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: 'junardvillahermosa',
                    element: <JunardVillahermosa />
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default AppRouters;