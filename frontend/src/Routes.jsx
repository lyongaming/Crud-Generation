import { useRoutes } from "react-router-dom";

import UsersCrud from "./pages/users/Users";
import PostsCrud from "./pages/posts/Posts";

const Routes = () => {

  const element = useRoutes([
    { path: "users", element: <UsersCrud /> },
    { path: "posts", element: <PostsCrud /> }
  ]);

  return element;
}

export default Routes;