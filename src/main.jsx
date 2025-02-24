import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage.jsx';
import Blog from './Pages/Blog.jsx';
import AddPost from './Components/PostsComponents/AddPost.jsx';
import EditPost from './Components/PostsComponents/EditPost.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: '/addpost',
        element: <AddPost/>,
        },
      {
        path: '/editPost/:id',
        element: <EditPost/>,
        },
      {
        path: "blog",
        element: <Blog/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
  />
);
