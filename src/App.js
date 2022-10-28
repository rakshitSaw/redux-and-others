import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/HomePage/Home";
import Features from "./components/features/Features";
import Examples from "./components/examples/Examples";
import Others from "./components/others/Others";
import AboutMe from "./components/aboutMe/AboutMe";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/others" element={<Others />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/" element={<Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
