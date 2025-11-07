// all of the tutorials + info for education page
// add more if needed
const weeks = [

  {
    id: 'week-01',
    title: 'Week 1 - HTML Basics',
    intro: "Defines the structure and content of web pages using elements like headings, paragraphs, and links.",
    links: [
      { label: 'MDN — HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { label: 'W3Schools — HTML Tutorial', url: 'https://www.w3schools.com/html/' },
      { label: 'See Example Code', url: 'https://github.com/queens-web-development-club/Education25-26/tree/main/week1' }
    ],
    logo: '/tech/html.svg'
  },

  {
    id: 'week-02',
    title: 'Week 2 - CSS Fundamentals',
    intro: 'Controls the visual design and layout of web pages — colors, fonts, spacing, and responsiveness.',
    href: 'https://github.com/queens-web-development-club/Education25-26',
    links: [
      { label: 'MDN — CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { label: 'CSS Tricks', url: 'https://css-tricks.com/' },
      { label: 'See Example Code', url: 'https://github.com/queens-web-development-club/Education25-26/tree/main/week2' }
    ],
    logo: '/tech/css.svg'
  },

  {
    id: 'week-03',
    title: 'Week 3 - JavaScript Basics',
    intro: 'Adds interactivity and dynamic behavior to web pages, allowing real-time updates, animations, and logic.',
    href: 'https://github.com/queens-web-development-club/Education25-26',
    links: [
      { label: 'MDN — JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { label: 'W3Schools — JS Tutorial', url: 'https://www.w3schools.com/js/' },
      { label: 'See Example Code', url: 'https://github.com/queens-web-development-club/Education25-26/tree/main/week3' }
    ],
    logo: '/tech/js.svg'
  }

]

export default weeks;