import { createBrowserRouter } from "react-router-dom";
import AddUser from "../app/users/AddUser";
import UserUpdate from "../app/users/UserUpdate";
import Hero from "../sections/heroSection/Hero.jsx";
import AddTasks from "../app/tasks/AddTasks";
import Root from "../Root";
import UpdateTask from "../app/tasks/UpdateTask.jsx";
import Post from "../app/post/Post.jsx";
import PostList from "../app/post/PostList.jsx";
import PostUpdate from "../app/post/PostUpdate.jsx";
import ViewPost from "../components/postList/ViewPost.jsx";
import Products from "../app/products/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Hero />,
        children: [
          {
            path: "/users",
            element: <AddUser />,
          },
          {
            path: "/add-task",
            element: <AddTasks />,
          },
          {
            path: "/Task-Update/:index",
            element: <UpdateTask />,
          },
          {
            path: "/User-Update/:index",
            element: <UserUpdate />,
          },
          {
            path: "/post",
            element: <Post />,
            
          },
          {
            path: "/post-list",
            element: <PostList />,
          },
          {
            path: "/post-Update/:id",
            element: <PostUpdate />,
          },
          {
            path: "/post-View/:id",
            element: <ViewPost />,
          },
          {
            path: "/products",
            element: <Products />,
          },
        ],
      },
    ],
  },
]);
export default router;
