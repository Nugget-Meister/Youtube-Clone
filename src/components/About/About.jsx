import React from "react";
import kc from "/src/images/kc.jpeg";
import gl from "/src/images/gl.png";
import je from "/src/images/je.jpg";
//import "./About.css";

const About = () => {
    return (
        <div className="About">
            <div className="About-message">
                <h2>About</h2>
                <div className="p-wrapper">
                    <p>
                      Welcome,this is our YouTube clone project. Using keywords the user can search for any video similar to YouTube. This app is created by <strong>Keith Camacho</strong>,{" "} <strong>Genesis Lara</strong>, and{" "}
                      <strong>James Edmond</strong>.
                    </p>
                </div>
            </div>
            <div>
                <div className="card-kc">
                    <img src={kc} />
                    <img src={gl} />
                    <img src={je} />
                    

                </div>
            </div>
        </div>
    );
}

export default About;
