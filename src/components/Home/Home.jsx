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
            {String(resultState)}
        </div>
      <VideoList resultState={resultState}/>
    </>
  );
};


export default Home;
