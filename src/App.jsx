import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons"
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import Home from "./Pages/Home";
import PostDetail from "./Pages/PostDetail";
import NoPage from "./Pages/NoPage";
import Nav from "./Components/Header/Nav";
library.add(fas, far, faTwitter, faFontAwesome);
function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Post" element={<PostDetail />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
