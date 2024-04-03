import { FaLinkedin, FaStripe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiPrisma, SiSocketdotio, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const WorksData = [
  {
    id: "1",
    title: "Learning management system",
    stack: [SiTypescript, TbBrandNextjs, SiPrisma, FaStripe],
    description:
      "I have used nextAuth for authentication, muxVideo for video player, getSteamIo for zoom integration.",
    iconLink: "/work-1.svg",
    wesiteImageUrl: "/work-website-1.png",
    completed: true,
    projectLink: "https://github.com/uttambohara/lms_next14",
  },
  {
    id: "2",
    title: "NextAuth",
    stack: [SiTypescript, TbBrandNextjs, SiPrisma],
    description:
      "Auth implementaion using NextAuth. Implemented signin, signup, token verification, two factor authenticaiton.",
    iconLink: "/work-3.png",
    wesiteImageUrl: "/work-website-3.png",
    completed: true,
    projectLink: "https://github.com/uttambohara/auth-5",
  },
  {
    id: "3",
    title: "Discord Clone",
    stack: [SiTypescript, TbBrandNextjs, SiPrisma, SiSocketdotio],
    description:
      "Socket IO for duplex communication, react query, zustand for state management, Next 12.",
    iconLink: "/work-4.svg",
    wesiteImageUrl: "/work-website-4.jpg",
    completed: true,
    projectLink: "https://github.com/uttambohara/discord_clone",
  },
  {
    id: "3",
    title: "Website builder",
    stack: [SiTypescript, TbBrandNextjs, SiPrisma, FaStripe],
    description:
      "NextAuth for authentication, stripe payment, react drag and drop, contextApi and reducer for website builder.",
    iconLink: "/work-2.svg",
    wesiteImageUrl: "/work-website-2.png",
    completed: false,
    projectLink: "https://github.com/uttambohara/prodigies",
  },
];

export const SocialMediaIcon = [
  {
    id: "1",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/uttam-bohara-a6b059271/",
  },
  {
    id: "2",
    icon: FaGithub,
    href: "https://github.com/uttambohara",
  },
];

export const NavigationItem = [
  {
    id: "1",
    name: "Home",
    href: "/",
  },
  {
    id: "2",
    name: "About",
    href: "#about",
  },
  {
    id: "3",
    name: "Stack",
    href: "#stack",
  },
  {
    id: "4",
    name: "Works",
    href: "#works",
  },
  {
    id: "5",
    name: "Experience",
    href: "#experience",
  },
  {
    id: "6",
    name: "Contact",
    href: "#contact",
  },
];

export const experiencesData = [
  {
    id: 0,
    date: "Upto february 2023",
    heading: "IELTS Instructor",
    expList: [
      "I worked as an IELTS instructor at Edupark Consultancy from 2018 to 2023.",
      "In between, I also worked part time in the Admissions Overseas, Education, and Migration Corner.",
      "But after four or five years of employment, I made the decision to quit since the work became repetative. Additionally, I had already begun studying web development and dedicated my entire attention to it.",
    ],
  },
  {
    id: 1,
    date: "August 2022",
    heading: "Education And Migration Corner",
    expList: [
      "Leveraged strong communication and interpersonal skills to provide academic guidance to students.",
      "While I enjoyed this role and the opportunity to support students, I was seeking a position that offered a clear path for professional development and growth.",
    ],
  },
];
