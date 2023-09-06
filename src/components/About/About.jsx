import React from "react";
import kc from "/src/images/kc.jpeg";
import gl from "/src/images/gl.png";
import je from "/src/images/je.jpg";
import "/src/components/About/About.css";

const About = () => {
    return (
        <div className="About">
            <div className="description">
                <span>
                    Welcome, this is our YouTube clone project <strong>TouYube</strong>. Using keywords, the user can search for any video similar to YouTube. This app is created by <strong>Keith Camacho</strong>, <strong>Genesis Lara</strong>, and 
                    <strong> James Edmond</strong>.
                </span>
            </div>
            <div className="cards">
                <div className="kc-card card">
                    <img src={kc} />
                        <h2>Keith Camacho</h2>
                        <p>
                             My name is Keith. I like cheese. 
                        </p>
                        <a href="https://github.com/Nugget-Meister ">GitHub</a>
                </div>
                
                <div className="gl-card card">
                    <img src={gl} />
                        <h2>Genesis Lara</h2>
                        <p>
                            My name is Genesis Lara born and raised in the Bronx, I'm a current Software Engineering fellow at Pursuit. I have a passion for the media and branding. I aim to one day, create websites and applications for my own businesses, and others. 
                        </p>
                        <a href="https://github.com/gen329">GitHub</a>
                </div>

                <div className="je-card card">
                    <img src={je} />
                        <h2>James Edmond</h2>
                        <p>
                             My name is James and I am studying to be a software engineer at Pursuit. {" "}
                        </p>
                        <a href="https://github.com/jed161 ">GitHub</a>
                </div>   
                    
                    

                
            </div>
        </div>
    );
}

export default About;
