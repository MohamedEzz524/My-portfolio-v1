import {
  temp1Large,
  temp1Small,
  temp2Large,
  temp2Small,
  temp3Large,
  temp3Small,
  temp4Large,
  temp4Small,
  temp5Large,
  temp5Small,
} from "../images/React-work/ReactApps.js";
import {
  todo,
  todo2,
  qrCodeGen,
  qrCodeGen2,
  movieGen,
  movieGen2,
  avatarGen,
  avatarGen2,
  wordle,
  wordle2,
  lyricsSearch,
  lyricsSearch2,
  colorBox,
  colorBox2,
  domainName,
  domainName2,
  paintApp,
  paintApp2,
} from "../images/React-work/ReactApps.js";

const reactApps = [
  {
    id: 1,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Domain%20name%20finder",
    title: "Domain-Name-Generator",
    images: [domainName, domainName2],
    description:
      "The Domain Name Generator App is a dynamic tool that helps users brainstorm creative domain names.",
    link: "https://www.npmjs.com/package/@rstacruz/startup-name-generator",
    method:
      "Users can simply type their desired keywords and explore unique domain suggestions instantly.Dynamic Suggestions: The app generates a list of names dynamically.",
  },

  {
    id: 2,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Qr-Code-Generator",
    title: "QR-Code-Generator",
    images: [qrCodeGen, qrCodeGen2],
    description:
      "The QR Code Generator App is a customizable tool for creating and downloading QR codes effortlessly. ",
    link: "http://api.qrserver.com/v1/create-qr-code/?data=text!&size=200x200&bgcolor=red",
    method:
      "Users can input text to encode, adjust dimensions with a slider, and personalize the QR code's background color.",
  },
  {
    id: 3,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/TODO",
    title: "Todo-List",
    images: [todo, todo2],
    description:
      "The To-Do List App is a simple and efficient tool for task management and perfect for organizing daily activities or goals. ",
    method:
      "Users can add, edit, and delete tasks using the clean interface. Each task in the list is displayed with options to Edit or Delete and displayed board",
  },
  {
    id: 4,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Word-Guess",
    title: "Word-Guess-Game",
    images: [wordle, wordle2],
    description:
      "The Word Guess Game App is an interactive and engaging tool inspired by games like Wordle, challenging users to guess a word. ",
    method:
      "The app is taking the guess and from user then validate and respond app dynamically manages multiple feature like restart, get-hint or back-step ",
  },

  {
    id: 5,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Paint-APP",
    title: "Paint",
    images: [paintApp, paintApp2],
    description:
      "The Paint App is a drawing tool. With responsive canvas, it’s perfect for sketching and artistic exploration.",
    method:
      "It features options to adjust brush color, width, and opacity, empowering users to create artwork tailored to their preferences",
  },
  {
    id: 6,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Avatar-Generator",
    title: "Avatar-Generator",
    images: [avatarGen, avatarGen2],
    description:
      "The Avatar Generator app is creative platform for designing and downloading unique avatars across various categories.",
    link: "https://api.dicebear.com/9.x/bottts/svg/seed500",
    method:
      "User can simply choose creative avatar style and app start generate random avatar, allowing him to download ",
  },
  {
    id: 7,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Search-Movie-Trailer",
    title: "Search-Movie",
    images: [movieGen, movieGen2],
    description:
      "The Movie Mania app is a user-friendly platform designed for discovering movies and TV shows. ",
    method:
      "App is holding search bar where users can type queries to find their favorite titles. Below the search bar, the app displays a dynamic grid of movie and TV show posters.",
  },
  {
    id: 8,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Search%20Lyrics",
    title: "Lyrics-Finder",
    images: [lyricsSearch, lyricsSearch2],
    description:
      "The Lyrics Finder App is a simple and user-friendly tool that lets users quickly search for song lyrics.",
    link: "https://api.lyrics.ovh/v1/Eminem/Venom",
    method:
      "users can enter the artist name and song name into the provided input fields and hit the vibrant Search button to retrieve lyrics effortlessly.",
  },
  {
    id: 9,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Color-Box-Changer",
    title: "Color-Box",
    images: [colorBox, colorBox2],
    description:
      "The Color Boxes App is an interactive tool generates grid of unique color pallets box. ",
    method:
      "By pressing any box it changes to random unique color, engaging and ever-changing visual experience. Perfect for exploring color palettes",
  },
];

const temps = [
  {
    id: 1,
    name: "First-Template",
    large: temp1Large,
    small: temp1Small,
    href: "https://mohamedezz524.github.io/First-project/",
    hrefGit: "https://github.com/MohamedEzz524/First-project",
    type: "HTML&CSS",
    colors: "#FF6E00, #3C6FDD",
    description:
      "My first template after learning HTML & CSS. A simple, static layout to practice structure and styling basics.",
    designSkills: [
      { name: "HTML", value: "60%" },
      { name: "CSS", value: "50%" },
    ],
  },
  {
    id: 2,
    name: "Second-Template",
    hrefGit: "https://github.com/MohamedEzz524/Second-project",
    large: temp2Large,
    small: temp2Small,
    href: "https://mohamedezz524.github.io/Second-project/",
    type: "HTML&CSS",
    colors: "#FF6E00, #3C6FDD",
    description:
      "Improved styling and layout using deeper CSS knowledge. Focused on cleaner design and better visual hierarchy",
    designSkills: [
      { name: "HTML", value: "75%" },
      { name: "CSS", value: "70%" },
    ],
  },
  {
    id: 3,
    hrefGit: "https://github.com/MohamedEzz524/Third-project",
    name: "Third-Template",
    large: temp3Large,
    small: temp3Small,
    href: "https://mohamedezz524.github.io/Third-project/",
    type: "HTML&CSS&JS",
    colors: "#FF6E00,#3C6FDD,#F4D03F",
    description:
      "My first interactive site using JavaScript. Simple DOM manipulation, good for early logic and scripting practice.",
    designSkills: [
      { name: "HTML", value: "80%" },
      { name: "CSS", value: "70%" },
      { name: "JavaScript", value: "50%" },
    ],
  },
  {
    id: 4,
    name: "Fourth-Template",
    hrefGit: "https://github.com/MohamedEzz524/Fourth-project",
    large: temp4Large,
    small: temp4Small,
    href: "https://mohamedezz524.github.io/Fourth-project/",
    type: "HTML&CSS&JS",
    colors: "#FF6E00,#3C6FDD ,#F4D03F",
    description:
      "Built with JavaScript, and responsive design. Focused on motion, interaction, and better UX.",
    designSkills: [
      { name: "HTML", value: "85%" },
      { name: "CSS", value: "80%" },
      { name: "JavaScript", value: "70%" },
    ],
  },
  {
    id: 5,
    name: "Fifth-Template",
    large: temp5Large,
    small: temp5Small,
    href: "https://mohamedezz524.github.io/Fifth-project/",
    hrefGit: "https://github.com/MohamedEzz524/Fifth-project",
    type: "BootStrap",
    colors: "#9B5DE5",
    description:
      "A clean layout made with Bootstrap. Explored utility classes and responsiveness with minimal custom ",
    designSkills: [
      { name: "HTML", value: "90%" },
      { name: "CSS", value: "70%" },
      { name: "Bootstrap", value: "60%" },
    ],
  },
];

export { temps, reactApps };
