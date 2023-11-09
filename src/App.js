import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Post from "./Pages/Post/Post.js";
import Feed from "./Pages/Feed/Feed.js";
import Edit from "./Pages/Edit/Edit.js";
import Lermais from "./Pages/LerMais/LerMais.js";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" Component={Feed}/>
          <Route path="/post" Component={Post}/>
          <Route path="/edit" Component={Edit}/>
          <Route path="/lermais" Component={Lermais}/>
        </Routes>
    </Router>
  );
}

export default App;
