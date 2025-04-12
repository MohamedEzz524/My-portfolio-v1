import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import {
  MainTitle,
  ParaSection,
  FontAwesomeIcon,
  AnimatedSection,
} from "../Imports/ImportCenter";
import { faAngleRight, faAngleLeft, faGamepad } from "../Imports/ImportCenter"; //icon
import { temps, reactApps } from "./Portfolio-Data";
import Temp from "./Port-Template/Temp";
import AppTemp from "./App-Temp/AppTemp";
import MemoryGame from "../Games/MemoryGame";
import RockPaperScissors from "../Games/RockPaperScissors";

export default function Portfolio() {
  const [name, setName] = useState("Unknown");
  const [gameIndex, setGameIndex] = useState(0);
  const sliderRef = useRef(null);
  //
  const [gameKey, setGameKey] = useState(0);
  const [gamesSectionKey, setGamesSectionKey] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  //react title
  const circles = useRef([]);

  const games = [
    <MemoryGame name={name} setGameKey={setGameKey} />,
    <RockPaperScissors name={name} />,
  ];

  const handlePlay = (e) => {
    const userName = window.prompt("Enter Your Name");
    const isValid =
      userName && userName.trim() !== "" && /^[a-zA-Z0-9]+$/.test(userName);
    if (isValid) {
      setName(userName);
      // e.target.parentNode.style.display = "none";
      setShowOverlay(false);
    } else {
      alert("Please enter a valid name using only letters or numbers!");
    }
  };

  const scrollToIndex = (i) => {
    if (sliderRef.current) {
      const sectionWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: i * sectionWidth,
        behavior: "smooth",
      });
    }
  };

  const nextGame = () => {
    if (gameIndex === games.length - 1) return;
    const newIndex = gameIndex + 1;
    setGameIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const previousGame = () => {
    if (gameIndex === 0) return;
    const newIndex = gameIndex - 1;
    setGameIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const quitGamesSection = () => {
    setGamesSectionKey((prev) => prev + 1);
    setShowOverlay(true);
    setName("Come again boss... ");
  };

  useEffect(() => {
    const animate = () => {
      circles.current.forEach((circle, i) => {
        const angle = (Date.now() / 1000 + (i * Math.PI) / 3) % (2 * Math.PI);
        const radius = 50;
        circle.style.transform = `
          translateX(${Math.cos(angle) * radius}px)
          translateY(${Math.sin(angle) * radius}px)
          scale(${0.8 + Math.sin(angle) * 0.2})
        `;
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <section className="portfolio section-app" id="portfolio">
      <MainTitle title="Portfolio" />
      <ParaSection para="My goal Is to turning creative ideas into responsive and functional web designs." />
      <section className="work">
        <p className="work-title">My Work</p>
        <div className="projects-container">
          {temps.map((temp, index) => (
            <Temp
              key={index}
              href={temp.href}
              hrefGit={temp.hrefGit}
              alt={temp.name}
              large={temp.large}
              small={temp.small}
              type={temp.type}
              colors={temp.colors}
              description={temp.description}
              designSkills={temp.designSkills}
            />
          ))}
        </div>
        <div className="react-work">
          <p className="react-title">
            <span className="react-animation">
              React
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  ref={(el) => (circles.current[i] = el)}
                  className="orbit-circle"
                  style={{
                    "--i": i,
                    background: `hsl(${i * 60}, 90%, 90%)`,
                    transition: "transform 0.3s ease-out",
                  }}
                />
              ))}{" "}
            </span>{" "}
            Apps
          </p>
          <AnimatedSection delay={0.1}>
            <div className="react-apps-grid">
              {reactApps.map((app, i) => (
                <AppTemp
                  key={app.id}
                  title={app.title}
                  href={app.href}
                  images={app.images}
                  desc={app.description}
                  method={app.method}
                  link={app.link}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Games */}
      <AnimatedSection delay={0.2}>
        <div className="games-section" key={gamesSectionKey}>
          <FontAwesomeIcon
            className={`arr left `}
            icon={faAngleLeft}
            size="xl"
            onClick={previousGame}
            style={{
              pointerEvents: gameIndex === 0 ? "none" : "auto",
            }}
          />
          <div className="games-container" ref={sliderRef} key={gameKey}>
            {games.map((game, index) => (
              <div className="game-container" key={index}>
                {game}
              </div>
            ))}
          </div>

          <FontAwesomeIcon
            className={`arr right`}
            icon={faAngleRight}
            size="xl"
            onClick={nextGame}
            style={{
              pointerEvents: gameIndex === games.length - 1 ? "none" : "auto",
            }}
          />
          {showOverlay ? (
            <div className="start-game">
              <h1>Get ready to play...</h1>
              <span className="play" onClick={(e) => handlePlay(e)}>
                <FontAwesomeIcon
                  icon={faGamepad}
                  size="xl"
                  className="gamepad"
                ></FontAwesomeIcon>
                PLAY
              </span>
            </div>
          ) : (
            <button
              className="quit-games-btn"
              type="button"
              onClick={quitGamesSection}
            >
              ✖️ Quit Games
            </button>
          )}
        </div>
      </AnimatedSection>

      {/* Outro */}
      <ParaSection para="Currently open to opportunities to apply my skills in real-world projects!" />
      <ParaSection para="Knowledge is power. Here’s how I keep mine updated." />
    </section>
  );
}
