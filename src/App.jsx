import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Navbar from "./components/common/Navbar";
import Home from "./components/Home/Home";

import About from "./components/About/About";
import Show from "./components/Show/Show";

//import "./App.css";

function App() {


  return (
    <>
      <div className="wrapper">
        <Router>
          <main>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/results/:query" element={<Home/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Show/:id" element={<Show/>}/>
            </Routes>
          </main>
        </Router>
      </div>
    </>
  );
}

export default App;
