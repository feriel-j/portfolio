import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Switch, Route } from "react-router";
import { useEffect, useState } from "react";
import { projectGet } from "./JS/projetSlice/projectSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(projectGet());
  }, [ping]);
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Resume">
          <Resume />
        </Route>
        <Route path="/Portfolio">
          <Portfolio ping={ping} setping={setping} />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
