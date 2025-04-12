import React from "react";
import "./home.css";
import {
  FontAwesomeIcon,
  faDownload,
  faAngleDown,
} from "../Imports/ImportCenter"; //local FontAwesome library
import { useEffect, useState, useRef } from "react";

import myImage from "../images/me-new2.png";
import Glowing from "../Components/Glowing/Glowing";
import FallingLines from "../Components/Falling-lines/FallingLines";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Creative Front-End Web Developer";
  const typingSpeed = 100; // Faster and smoother typing
  const animationRef = useRef(null);
  //welcome
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const cvPath =
    process.env.PUBLIC_URL + "/documents/[Mohamed.E]_Frontend_CV.pdf";

  useEffect(() => {
    // Welcome message timeout
    const welcomeTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowWelcome(false), 1000); // Match fade-out duration
    }, 2000);

    let index = 0;
    const typeCharacter = () => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
        animationRef.current = setTimeout(typeCharacter, typingSpeed);
      }
    };

    // Start typing only after welcome disappears
    const typingTimer = setTimeout(() => {
      animationRef.current = setTimeout(typeCharacter, typingSpeed);
    }, 3500); // Welcome duration + fade out

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(typingTimer);
      clearTimeout(animationRef.current);
    };
  }, []);

  return (
    <section className="home" id="home">
      <FallingLines />
      {showWelcome ? (
        <div className={`welcome-msg ${fadeOut ? "fade-out" : "fade-in"}`}>
          <div className="welcome-content">
            <h1 className="welcome-text">Welcome</h1>
            <p className="welcome-subtext">to my portfolio Website</p>
            <div className="welcome-loader"></div>
          </div>
        </div>
      ) : (
        <div className="intro">
          <div className="intro-img">
            <div className="rotating-gear">
              <div className="large-gear">
                <div className="edge"></div>
                <div className="edge"></div>
                <div className="edge"></div>
                <div className="edge"></div>
              </div>
              <div className="between-gear"></div>
            </div>
            <img src={myImage} alt="Mohamed ElSayed" />
          </div>
          <div className="intro-text">
            <div className="my-title">
              <p className="hello">Hello, I am</p>
              <p className="my-name">Mohamed ElSayed</p>
              <p>
                <span
                  className="my-subtitle"
                  style={{
                    borderRight: "1px solid #00ffff",
                  }}
                >
                  {text}
                </span>
              </p>
              <p className="my-description">
                I design and develop engaging, interactive, and user-friendly
                web experiences.
              </p>
            </div>
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              download="[Mohamed.E]_Frontend_CV.pdf"
              className="btn-download"
            >
              <FontAwesomeIcon className="ic" icon={faDownload} size="sm" />
              Download CV
            </a>
          </div>
        </div>
      )}
      <div className="scroll-down">
        <a href="#about" className="scroll-down-arrow">
          <Glowing glowColor="radial-gradient(circle, #6e00ff , #c084fc)  " />
          <FontAwesomeIcon className="arrow" icon={faAngleDown} size="xl" />
        </a>
      </div>
    </section>
  );
}
