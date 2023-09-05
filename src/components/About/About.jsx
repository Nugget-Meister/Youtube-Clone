import React from "react";
import kc from "/src/images/kc.jpeg";
import gl from "/src/images/gl.png";
import je from "/src/images/je.jpg";
//import "./About.css";

const About = () => {
    return (
        <div className="About">
            <div className="About-message">
                <div className="p-wrapper">
                    <p>
                      Welcome, this is our YouTube clone project. Using keywords, the user can search for any video similar to YouTube. This app is created by <strong>Keith Camacho</strong>,{" "} <strong>Genesis Lara</strong>, and{" "}
                      <strong>James Edmond</strong>.
                    </p>
                </div>
            </div>
            <div>
                <div className="kc-card">
                    <img src={kc} />
                    <div className="kc-container">
                        <h2>Keith Camacho</h2>
                        <p>
                            Bio:{" "} 
                        </p>
                        <a href="https://github.com/Nugget-Meister ">GitHub</a>
                    </div>
                </div>
                <div className="gl-card">
                    <img src={gl} />
                    <div className="gl-container">
                        <h2>Genesis Lara</h2>
                        <p>
                            Bio:{" "}
                        </p>
                        <a href="https://github.com/gen329">GitHub</a>
                    </div>
                </div>

                <div className="je-card">
                    <img src={je} />
                    <div className="je-container">
                        <h2>James Edmond</h2>
                        <p>
                            Bio:{" "}
                        </p>
                        <a href="https://github.com/jed161 ">GitHub</a>
                    </div>
                </div>   
                    
                    

                
            </div>
        </div>
    );
}

export default About;
