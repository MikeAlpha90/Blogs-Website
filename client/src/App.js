import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./components/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact?";
import About from "./pages/about/About";

function App() {
  const user = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={user ? <Home />: <Register/>} />
      </Routes>
      <Routes>
        <Route path="/register" element={user ? <Home />: <Register/>} />
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Home />:<Login />} />
      </Routes>
      <Routes>
        <Route path="/write" element={user ? <Write />:<Register />} />
      </Routes>
      <Routes>
        <Route path="/setting" element={user ? <Setting/>: <Register/>} />
      </Routes>
      <Routes>
        <Route path="/contact" element={user ? <Contact/>: <Register/>} />
      </Routes>
      <Routes>
        <Route path="/about" element={user ? <About/>: <Register/>} />
      </Routes>
      <Routes>
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
