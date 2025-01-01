import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import Home from "./Pages/Home";
import PostDetail from "./Pages/PostDetail";
import NoPage from "./Pages/NoPage";
import Nav from "./Components/Header/Nav";
import Publish from "./Pages/Publish";
import Music from "./Pages/Music";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Settings from "./Pages/Profile";

library.add(fas, far, faTwitter, faFontAwesome);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Post/:id" element={<PostDetail />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/account/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
