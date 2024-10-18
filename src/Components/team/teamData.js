import { KHYLE, HUY } from "@/../../public/team-photos/chairs";
import { MATTHEW, POORIA } from "@/../../public/team-photos/design";
import {
  ARYAN,
  BASEL,
  WAFEEQA,
  ZAC,
} from "@/../../public/team-photos/development";
import { GAVIN, JOHN, KOSI, SABIN } from "@/../../public/team-photos/education";
import {
  ANNIKA,
  ELISA,
  SARAH,
  SAUL,
} from "@/../../public/team-photos/partnerships";

const teamData = {
  Cochairs: [
    {
      name: "Khyle Sewpersaud",
      exec: true,
      role: "Co-Chair",
      text: {
        year: "3rd Year",
        program: "Computing",
        responsibility:
          "Keeping all the teams at QWeb on the same page and on track while also looking for opportunities to take QWeb to the next level!",
        funFact:
          "I like to collect fancy pencils! So far I have a bunch from Muji and a rotating one from Kuru Toga and looking to get more",
      },
      image: KHYLE,
    },
    {
      name: "Huy Truong",
      exec: true,
      role: "Co-Chair",
      text: {
        year: "3nd Year",
        program: "Computing (SODE)",
        responsibility:
          "Managing club operations, events, finances, and representing QWeb!",
        funFact: "I own 5 computers, cause, why not?",
      },
      image: HUY,
    },
  ],

  Design: [
    {
      name: "Matthew Susko",
      exec: true,
      role: "Design Executive",
      text: {
        year: "4th Year",
        program: "Computing (Software Design)",
        responsibility:
          "I help lead the design efforts for QWEB across all social media platforms and other mediums like merchandise. I also take the lead on creating educational content focused on all things design.",
        funFact: "I'm on QUIP rn!!",
      },
      image: MATTHEW,
    },
    {
      name: "Pooria Ahmadi",
      exec: false,
      role: "Design Director",
      text: {
        year: "1st Year",
        program: "Computing",
        responsibility:
          "Designing social media posts, merch, and general design help",
        funFact:
          "I made a script to check my Waterloo application status for me 💀It crashed because I got rejected and that was an edge case 😂",
      },
      image: POORIA,
    },
  ],

  Development: [
    {
      name: "Aryan Chawala Dora",
      exec: true,
      role: "Development Executive",
      text: {
        year: "4th Year",
        program: "Computing",
        responsibility:
          "Managing the Development Team for internal development and sprint oversight",
        funFact:
          "I love listening to all types of music so please send recommendations!!",
      },
      image: ARYAN,
    },
    {
      name: "Wafeeqa Chowdhury",
      exec: false,
      role: "Development Director",
      text: {
        year: "2th Year",
        program: "Computing",
        responsibility:
          "Deploying our new websites, assisting teams in the development sprint, making necessary frontend changes to the qweb site",
        funFact: "I have 100 percented all spiderman games by insomniac ",
      },
      image: WAFEEQA,
    },
    {
      name: "Basel Abdelhadi",
      exec: false,
      role: "Development Director",
      text: {
        year: "5th Year",
        program: "Statistics",
        responsibility:
          "As Development Director I develop the website for Qweb for the backend and frontend and help the other teams",
        funFact: "That I am from four different countries",
      },
      image: BASEL,
    },
    {
      name: "Zac Finkelstein",
      exec: false,
      role: "Development Director",
      text: {
        year: "1st Year",
        program: "Computing",
        responsibility:
          "Take on parts of QWeb's development during the fall and assisting teams in the winter sprint.",
        funFact: "I have two cats, Max and Ruby!",
      },
      image: ZAC,
    },
  ],

  PartnershipsAndOperations: [
    {
      name: "Saul Wolkove",
      exec: true,
      role: "Partnerships and Operations Executive",

      text: {
        year: "3rd Year",
        program: "Computing",
        responsibility:
          "I create and develop relationships with clients and businesses for our Winter development sprint",
        funFact: "I have three cats and two dogs!",
      },
      image: SAUL,
    },
    {
      name: "Elisa Goncalves",
      exec: false,
      role: "Partnerships and Operations Director",
      text: {
        year: "2nd Year",
        program: "Computing",
        responsibility:
          "Reach out to different clubs and companies to try and gain sponsorships",
        funFact: "I can speak three languages",
      },
      image: ELISA,
    },
    {
      name: "Annika Tran",
      exec: false,
      role: "Partnerships and Operations Director",
      text: {
        year: "2nd Year",
        program: "Computing",
        responsibility:
          "Look for client for QWeb sprint and sponsors and partnership ",
        funFact: "I collect Dimoos",
      },
      image: ANNIKA,
    },
    {
      name: "Sarah Mohammad",
      exec: false,
      role: "Partnerships and Operations Director",
      text: {
        year: "2nd Year",
        program: "Computing",
        responsibility:
          "As the partnership and outreach director, I seek out potential clients who could benefit from our website-building services and reach out to secure project opportunities for our members. Additionally, I work to build relationships with potential sponsors to enhance the club's offerings and create more opportunities for our team to grow and succeed",
        funFact: "I'm a huge formula one fan",
      },
      image: SARAH,
    },
  ],

  Education: [
    {
      name: "Gavin Yan",
      exec: true,
      role: "Education Executive",
      text: {
        year: "3rd Year",
        program: "Computing",
        responsibility:
          "Oversee the education team in developing the fall tutorials",
        funFact: "I've recently taken a keen interest in entrepreneurship",
      },
      image: GAVIN,
    },
    {
      name: "Kosisochi Amobi-Oleka",
      exec: false,
      role: "Education Director",
      text: {
        year: "2nd Year",
        program: "Computing",
        responsibility: "Contributing to the education suite/tutorial",
        funFact: "I prefer python",
      },
      image: KOSI,
    },
    {
      name: "Sabin Pokhrel",
      exec: false,
      role: "Education Director",
      text: {
        year: "3rd Year",
        program: "Computing",
        responsibility: "Preparing lesson material for the weekly tutorials",
        funFact: "90s R&B lover",
      },
      image: SABIN,
    },
    {
      name: "John Li",
      exec: false,
      role: "Education Director",
      text: {
        year: "3rd Year",
        program: "Computing",
        responsibility:
          "As of now; creating educational materials for the tutorials (slides presentations, code), take photos of Gavin teaching lol, possibly help answer questions",
        funFact:
          "The Western Lowland Gorilla's scientific name is 'gorilla gorilla gorilla'",
      },
      image: JOHN,
    },
  ],
};

const roles = [
  "Cochairs",
  "Design",
  "Development",
  "PartnershipsAndOperations",
  "Education",
];

export { teamData, roles };
