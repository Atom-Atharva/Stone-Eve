import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import WinterSale from "./WinterSale";
import Cart from "./Cart";
import Login from "./Login";
import Card from "./Card";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/winter_sale",
            element: <WinterSale />,
        },
        {
            path: "/cart",
            element: <Cart />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/cards/:cardId",
            element: <Card />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;
