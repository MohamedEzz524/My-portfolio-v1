import htmlLogo from "../images/objects/HTML.png";
import cssLogo from "../images/objects/CSS.png";
import jsLogo from "../images/objects/javaScript.png";
import reactLogo from "../images/objects/REACT.png";
import bsLogo from "../images/objects/BS.png";
import tsLogo from "../images/objects/Typescript.png";
import sassLogo from "../images/objects/SASS.png";
import gitLogo from "../images/objects/Github.png";
import pugLogo from "../images/objects/pug.png";
import {
  faHtml5,
  faCss3,
  faJs,
  faT,
  faP,
  faGithub,
  faSass,
  faReact,
  faBootstrap,
} from "../Imports/ImportCenter";

const items = [
  {
    src: htmlLogo,
    name: "HTML",
    icon: faHtml5,
    color: "#FC490B",
    id: 1,
    percentage: "95%",
    linearGrad: "linear-gradient(145deg, #FC490B, #FF6E00)",
    percentageColor: "#ff6e00",
    percentageBg: "#3c6fdd",
  },
  {
    src: cssLogo,
    icon: faCss3,
    name: "CSS",
    color: "#264DE4",
    id: 2,
    percentage: "88%",
    linearGrad: "linear-gradient(145deg, #264DE4, #3C6FDD)",
    percentageColor: "#3c6fdd",
    percentageBg: "#3c6fdd",
  },
  {
    src: jsLogo,
    name: "JS",
    icon: faJs,
    color: "#EACB32",
    id: 3,
    percentage: "85%",
    linearGrad: "linear-gradient(145deg, #EACB32, #F4D03F)",
    percentageColor: "#ffa500",
    percentageBg: "#3c6fdd",
  },
  {
    id: 4,
    src: reactLogo,
    name: "REACT",
    icon: faReact,
    color: "#00D8FF",
    percentage: "80%",
    linearGrad: "linear-gradient(145deg, #00D8FF, #00A9E0)",
    percentageColor: "#00a9e0",
    percentageBg: "#3c6fdd",
  },
  {
    src: bsLogo,
    name: "BS",
    icon: faBootstrap,
    color: "#8111FA",
    id: 5,
    percentage: "85%",
    linearGrad: "linear-gradient(145deg, #8111FA, #9B5DE5)",
    percentageColor: "#9b5de5",
    percentageBg: "#3c6fdd",
  },
  {
    src: tsLogo,
    name: "TS",
    icon: faT,
    color: "#197ABF",
    id: 6,
    percentage: "83%",
    linearGrad: "linear-gradient(145deg, #197ABF, #1A65A4)",
    percentageColor: "#1a65a4",
    percentageBg: "#3c6fdd",
  },
  {
    src: sassLogo,
    name: "SASS",
    icon: faSass,
    color: "#D06397",
    id: 7,
    percentage: "88%",
    linearGrad: "linear-gradient(145deg, #D06397, #FF6B8A)",
    percentageColor: "#ff6b8a",
    percentageBg: "#3c6fdd",
  },
  {
    src: gitLogo,
    icon: faGithub,
    name: "GitHub",
    color: "#fff",
    id: 8,
    percentage: "75%",
    linearGrad: "linear-gradient(145deg, #3D3D3D, #6A6A6A)",
    percentageColor: "#999",
    percentageBg: "#3c6fdd",
  },
  {
    src: pugLogo,
    name: "Pug",
    icon: faP,
    color: "#5C3B32",
    id: 9,
    percentage: "85%",
    linearGrad: "linear-gradient(145deg, #5C3B32, #8D5D4C)",
    percentageColor: "#8d5d4c",
    percentageBg: "#3c6fdd",
  },
];

export { items };
