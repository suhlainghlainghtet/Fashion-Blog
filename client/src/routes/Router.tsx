import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavaBar from "../components/navaBar/NavaBar";
import SinglePost from "../components/singlePost/SinglePost";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Settings from "../pages/settings/Settings";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import CreatePost from "../pages/write/CreatePost";
export default function Router() {
  return (
    <BrowserRouter>
      <NavaBar />
      <Routes>
        <Route path="/signin" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/" Component={Home} />
        <Route path="/posts/:postId" Component={SinglePost} />
        <Route path="/about" Component={About} />
        <Route path="/write" Component={CreatePost} />
        <Route path="/contact" Component={Contact} />
        <Route path="/settings" Component={Settings} />
      </Routes>
    </BrowserRouter>
  );
}
