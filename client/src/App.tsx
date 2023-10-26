import "./App.css";
import NavaBar from "./components/navaBar/NavaBar";
import Logout from "./pages/logout/Logout";
// import CreatePost from "./pages/write/CreatePost";
// import SinglePost from "./components/singlePost/SinglePost";

function App() {
  return (
    <>
      <NavaBar />
      {/* <Home /> */}
      {/* <SinglePost /> */}
      {/* <CreatePost /> */}
      <Logout />
    </>
  );
}

export default App;
