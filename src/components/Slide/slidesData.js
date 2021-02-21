import HeroVideo1 from "../../img/HeroVideo1.mp4";
import HeroVideo2 from "../../img/HeroVideo2.mp4";
import Ellipse1 from "../../img/Ellipse1.svg";
import burgerweb from "../../img/burgerweb.png";
import teezerweb from "../../img/teezerweb.png";
import colorhexweb from "../../img/colorhexweb.png";

export const slidesData = [
  {
    video: HeroVideo1,
    h2: "Hello I am ",
    span: "Tommy.",
    h3: "A Front End Web Developer.",
    contactButton: "Contact Me",
    div: true,
    arrow: true,
  },
  {
    video: HeroVideo2,
    span2: "Creative",
    h2: " Projects.",
    h4: "Creativity is contagious, pass it on.",
    projectButton: "View All",
    projects: [
      { img: burgerweb, url: "https://modest-jackson-791386.netlify.app/" },
      { img: teezerweb, url: "https://competent-khorana-6c9637.netlify.app" },
      { img: colorhexweb, url: "https://competent-khorana-6c9637.netlify.app" },
    ],
  },
  {
    video: HeroVideo2,
    h2: "Problem-",
    span: "Solving",
    h4: "The problem is your attitude about the problem.",
    code: {
      one: "Understand. ",
      two: "Plan. ",
      three: "Work. ",
      four: "Optimize.",
    },
    animation: {
      img1: Ellipse1,
    },
  },
];
