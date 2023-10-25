import "./App.css";
import NavaBar from "./components/navaBar/NavaBar";
import CreatePost from "./pages/write/CreatePost";
// import SinglePost from "./components/singlePost/SinglePost";
// import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <NavaBar />
      {/* <Home /> */}
      {/* <SinglePost /> */}
      <CreatePost />
    </>
  );
}

export default App;
