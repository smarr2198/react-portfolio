import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LinksPage from "./pages/LinksPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
      <Routes>
        <Route path="/projects" element={<ProjectPage></ProjectPage>} />
      </Routes>
      <Routes>
        <Route path="/Links" element={<LinksPage></LinksPage>} />
      </Routes>
    </Router>
  );
}

export default App;
