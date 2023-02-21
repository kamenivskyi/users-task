import { Route, Routes } from "react-router-dom";
import { UsersPage } from "features/users/pages/Users";
import { UserPosts } from "features/users/pages/UserPosts";
import NotFound from "components/NotFound";

export const routes = (
  <Routes>
    <Route path="/" element={<UsersPage />} />
    <Route path="/posts">
      <Route path=":userId" element={<UserPosts />} />
    </Route>
    БК
    <Route path="*" element={<NotFound />} />
  </Routes>
);
