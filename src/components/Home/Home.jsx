import React, { useEffect } from "react";
import { useState } from "react";

import Searchbar from "./Searchbar";
import VideoList from "./VideoList";

import reactLogo from "/src/assets/react.svg";
import viteLogo from "/public/vite.svg";

const Home = () => {

    const [resultState, updateResultState] = useState([]);

    useEffect(() => {
        console.log("state updated: ", resultState)
    }, [resultState])

        
  return (
    <>
        <Searchbar updateResultState={updateResultState}/>
      <div>
        <div>
            {String(resultState)}
        </div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <VideoList resultState={resultState}/>
    </>
  );
};


export default Home;
