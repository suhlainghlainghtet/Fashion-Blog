import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavaBar from "../components/navaBar/NavaBar";
import SinglePost from "../components/singlePost/SinglePost";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Settings from "../pages/settings/Settings";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import CreatePost from "../pages/write/CreatePost";
export default function Router() {
  const user = true;
  return (
    <BrowserRouter>
      <NavaBar />
      <Routes>
        <Route path="/" Component={user ? Home : SignUp} />
        {user ? (
          <Route path="/signin" Component={SignIn} />
        ) : (
          <Route path="/signup" Component={SignUp} />
        )}
        <Route path="/posts/:postId" Component={user ? SinglePost : SignUp} />
        <Route path="/about" Component={user ? About : SignUp} />
        <Route path="/write" Component={user ? CreatePost : SignUp} />
        <Route path="/contact" Component={user ? Contact : SignUp} />
        <Route path="/settings" Component={user ? Settings : SignUp} />
      </Routes>
    </BrowserRouter>
  );
}
