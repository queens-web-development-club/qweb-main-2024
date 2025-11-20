// all of the tutorials + info for education page
// add more if needed
const weeks = [
  {
    id: "week-01",
    title: "Tutorial 1 - HTML Basics",
    intro:
      "Defines the structure and content of web pages using elements like headings, paragraphs, and links.",
    links: [
      {
        label: "MDN — HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        label: "W3Schools — HTML Tutorial",
        url: "https://www.w3schools.com/html/",
      },
      {
        label: "See Example Code",
        url: "https://github.com/queens-web-development-club/Education25-26/tree/main/week1",
      },
    ],
    logo: "/tech/html.svg",
  },

  {
    id: "week-02",
    title: "Tutorial 2 - CSS/HTML Styling",
    intro:
      "Controls the visual design and layout of web pages — colors, fonts, spacing, and responsiveness.",
    href: "https://github.com/queens-web-development-club/Education25-26",
    links: [
      {
        label: "MDN — CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      { label: "CSS Tricks", url: "https://css-tricks.com/" },
      {
        label: "See Example Code",
        url: "https://github.com/queens-web-development-club/Education25-26/tree/main/week2",
      },
    ],
    logo: "/tech/css.svg",
    file: "tutorial2.txt",
  },

  {
    id: "week-03",
    title: "Tutorial 3 - JavaScript",
    intro:
      "Adds interactivity and dynamic behavior to web pages, allowing real-time updates, animations, and logic.",
    href: "https://github.com/queens-web-development-club/Education25-26",
    links: [
      {
        label: "MDN — JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        label: "W3Schools — JS Tutorial",
        url: "https://www.w3schools.com/js/",
      },
      {
        label: "See Example Code",
        url: "https://github.com/queens-web-development-club/Education25-26/tree/main/week3",
      },
    ],
    logo: "/tech/js.svg",
    file: "tutorial3.txt",
  },

  {
    id: "week-04",
    title: "Tutorial 4 - Git + GitHub",
    intro:
      "Enables version control and collaboration, allowing developers to track changes, manage branches, and share projects seamlessly.",
    href: "https://github.com/queens-web-development-club/Education25-26",
    links: [
      {
        label: "MDN — GitHub Discussions",
        url: "https://developer.mozilla.org/en-US/docs/MDN/Community/Discussions",
      },
      { label: "W3Schools — Git", url: "https://www.w3schools.com/git/" },
      {
        label: "See Example Code",
        url: "https://github.com/queens-web-development-club/Education25-26/tree/main/week4",
      },
    ],
    logo: "/tech/git.svg",
    file: "tutorial4.txt",
  },
  {
    id: "week-05",
    title: "Tutorial 5 - React + Vite",
    intro:
      "Builds fast, component-based web interfaces using a modern development environment optimized for speed and efficiency.",
    href: "https://github.com/queens-web-development-club/Education25-26",
    links: [
      {
        label: "MDN — React",
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started",
      },
      {
        label: "Vite",
        url: "https://vite.dev/guide/",
      },
      {
        label: "W3Schools — React",
        url: "https://www.w3schools.com/REACT/DEFAULT.ASP",
      },
      {
        label: "See Example Code",
        url: "https://github.com/queens-web-development-club/Education25-26/tree/main/week5",
      },
    ],
    logo: "/tech/react-js.svg",
    file: "tutorial5.txt",
  },
  {
    id: "week-06",
    title: "Tutorial 6 - Routing, Components & Styling in React",
    intro:
      "Learn how to navigate pages, structure reusable components, and style your React apps effectively using modern tools and best practices.",
    href: "https://github.com/queens-web-development-club/Education25-26",
    links: [
      {
        label: "W3Schools — React Routing",
        url: "https://www.w3schools.com/react/react_router.asp",
      },
      {
        label: "ReactJS - Components and Props",
        url: "https://legacy.reactjs.org/docs/components-and-props.html",
      },
      {
        label: "W3Schools — Styling React using CSS",
        url: "https://www.w3schools.com/react/react_css.asp",
      },
      {
        label: "See Example Code",
        url: "https://github.com/queens-web-development-club/Education25-26/tree/main/week6",
      },
    ],
    logo: "/tech/react-js.svg",
    file: "tutorial6.txt",
  },
  {
    id: "week-07",
    title: "Tutorial 7 - APIs + Fetching Data",
    intro:
      "Learn how to communicate with external services, fetch live data, and integrate JSON responses directly into your React components.",
    href: "https://github.com/queens-web-development-club/Education25-26",
    links: [
      {
        label: "API Handling in JavaScript & React",
        url: "https://dev.to/shubhamtiwari909/mastering-api-handling-in-javascript-react-a-complete-guide-45kk",
      },
      {
        label: "Mozilla - Using the Fetch API",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
      },
      {
        label: "See Example Code",
        url: "https://github.com/queens-web-development-club/Education25-26/tree/main/week5",
      },
    ],
    logo: "/tech/react-js.svg",
    file: "tutorial7.txt",
  },
  {
    id: "week-08",
    title: "Tutorial 8 - Backend Integration",
    intro:
      "Learn how to connect your React frontend to a backend server, build custom API routes, and manage data using a lightweight Express.js setup.",
    href: "https://github.com/queens-web-development-club/Education25-26",
    links: [
      {
        label: "ExpressJS",
        url: "https://expressjs.com",
      },
      {
        label: "GeeksForGeeks - JavaScript for Backend Development",
        url: "https://www.geeksforgeeks.org/javascript/javascript-backend-basics/",
      },
      {
        label: "W3Schools — NodeJS",
        url: "https://www.w3schools.com/nodejs/",
      },
      {
        label: "See Example Code",
        url: "https://github.com/queens-web-development-club/Education25-26/tree/main/week8",
      },
    ],
    logo: "/tech/express-js.svg",
    file: "tutorial8.txt",
  },
];

export default weeks;
