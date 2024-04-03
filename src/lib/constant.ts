import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiPrisma, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const WorksData = [
  {
    id: "1",
    title: "Learning management system",
    stack: [SiTypescript, TbBrandNextjs, SiPrisma],
    description:
      "I have used nextAuth for authentication, muxVideo for video player, getSteamIo for zoom integration.",
    iconLink: "/work-1.svg",
    wesiteImageUrl: "/work-website-1.png",
    completed: false,
  },
  {
    id: "2",
    title: "Website builder",
    stack: [SiTypescript, TbBrandNextjs, SiPrisma],
    description:
      "NextAuth for authentication, stripe payment, react drag and drop, contextApi and reducer for website builder.",
    iconLink: "/work-2.svg",
    wesiteImageUrl: "/work-website-2.png",
    completed: false,
  },
];

export const SocialMediaIcon = [
  {
    id: "1",
    icon: FaLinkedin,
  },
  {
    id: "2",
    icon: FaGithub,
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
    name: "Works",
    href: "#works",
  },
  {
    id: "4",
    name: "Experience",
    href: "#experience",
  },
  {
    id: "5",
    name: "Contact",
    href: "#contact",
  },
];

export const experiencesData = [
  {
    id: 0,
    date: "February 2023",
    heading: "Learning Management System",
    expList: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt accumsan enim id suscipit. In porta mattis vestibulum. Donec hendrerit a tellus et condimentum.",
    ],
  },
  {
    id: 1,
    date: "August 2023",
    heading: "Web content creation app",
    expList: [
      "Quisque condimentum lorem tempor orci consequat molestie. Phasellus porttitor ante sed ultricies rhoncus.",
    ],
  },
];
