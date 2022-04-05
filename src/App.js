import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Blog from "./Components/Blog/Blog";
import NotFount from "./Components/NotFount/NotFount";
import Deshbord from "./Components/Deshbord/Deshbord";
import CommentTwo from "./Components/Comment/CommentTwo";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/deshbord" element={<Deshbord></Deshbord>}></Route>
        <Route path="/commenttwo" element={<CommentTwo></CommentTwo>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFount></NotFount>}></Route>
      </Routes>
    </div>
  );
}

export default App;
