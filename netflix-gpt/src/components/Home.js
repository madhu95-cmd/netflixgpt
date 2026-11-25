import {createBrowserRouter, RouterProvider} from "react-router";
import Login from "./Login";
import Signin from "./Signin";

const Home = () => {
    //create the routes here
    const appRouter = createBrowserRouter([
        // {
        //     path:"/",
        //     element: <Login/>
        // }
        {
            path: "/",
            element: <Signin />
        }
        ])
        
    return (
        <RouterProvider router={appRouter} />
    )
}

export default Home;