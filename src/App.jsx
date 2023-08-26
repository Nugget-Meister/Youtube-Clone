import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Navbar from "./components/common/Navbar";
import Home from "./components/Home/Home";


import "./App.css";

function App() {


  return (
    <>
      <div className="wrapper">
        <Router>
          <main>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
          </main>
        </Router>
      </div>
    </>
  );
}

export default App;
