import {
  AcademicCapIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import heroImage from "../images/header-background.webp";
import hackerDesktop from "../images/portfolio/hackerDesktop.png";
import edenPortfolio from "../images/portfolio/edenPortfolio.png";
import easyTrade from "../images/portfolio/easyTrade.png";
import onlineBookingSystem from "../images/portfolio/onlineBookingSystem.png";

import profilepic from "../images/profilepic.jpg";
import testimonialImage from "../images/testimonial.webp";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Eden's Portfolio",
  description: "Eden's Personal Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: ["Hello, I am Mo Xu", "Hello, I am Eden Xu"],
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a{" "}
        <strong className="text-stone-100">Full Stack Software Engineer</strong>{" "}
        with 1+ years experience, graduated from{" "}
        <strong className="text-stone-100">The University of Sydney</strong> IT
        master, have extensive hands-on experience in Java back-end and also
        front-end technologies.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        The core programmer on a startup project. Quick at learning new
        technologies and architectures and applying them to real-world issues.
      </p>
    </>
  ),
  actions: [
    {
      href: "/MoXu_SDE_Resume.pdf",
      text: "Resume",
      primary: true,
      Icon: DownloadIcon,
      download: true,
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  aboutItems: [
    {
      label: "Location",
      text: "Sydney, Australia",
      Icon: MapIcon,
    },
    {
      label: "Nationality",
      text: "Chinese",
      Icon: FlagIcon,
    },
    {
      label: "Study",
      text: "The University of Sydney",
      Icon: AcademicCapIcon,
    },
    {
      label: "Employment",
      text: "Flash Hero Pty Ltd",
      Icon: OfficeBuildingIcon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Backend development",
    skills: [{ name: "Java" }, { name: "SpringBoot" }, { name: "Nodejs" }],
  },
  {
    name: "Frontend development",
    skills: [
      { name: "React" },
      { name: "Vue" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    name: "Database development",
    skills: [
      { name: "DynamoDB" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
  {
    name: "Other skills",
    skills: [
      { name: "Amazon Web Services" },
      { name: "Git" },
      { name: "Python" },
      { name: "English" },
      { name: "Mandarin" },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Hacker Desktop",
    description:
      "A full-stack personal open-source project based entirely on AWS Serverless, used to display some IT-related and AWS-related information. Implemented with SST framework, Nodejs and TypeScript.",
    url: "https://edenhackerdesktop.link/",
    image: hackerDesktop,
  },
  {
    title: "Eden's Portfolio",
    description:
      "Eden's personal static website to show porfolio and resume based on React and TypeScript.",
    url: "https://edenportfolio.link/",
    image: edenPortfolio,
  },
  {
    title: "Easy Trade vehicle sell information platform",
    description:
      "A vehicle-to-sell information platform including SpringBoot backend and Vue frontend, used in real-world business.",
    url: "https://github.com/EdenX-97/easy-trade-front-example",
    image: easyTrade,
  },
  {
    title: "OBS-C19T",
    description:
      "Online booking system for COVID-19 nucleic acid testing (OBS-C19T). A full-stack project implemeneted by MEAN(MongoDB, Express, Angular, Node).",
    url: "https://github.com/EdenX-97/online-booking-system",
    image: onlineBookingSystem,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "JUL 2020 - JUL 2022",
    location: "The University of Sydney",
    title: "Master in Information Technology",
    content: (
      <p>
        Learned about web full stack programming, machine learning, data
        visualization, data structure and algorithm project management, etc.
      </p>
    ),
  },
  // {
  //   date: "JUN 2015 - SEP 2019",
  //   location: "The University of Sydney",
  //   title: "Master in Information Technology",
  //   content: (
  //     <p>
  //       Learned about web full stack programming, machine learning, data
  //       visualization, data structure and algorithm project management, etc.
  //     </p>
  //   ),
  // },
];

export const experience: TimelineItem[] = [
  {
    date: "AUG 2022 - Now",
    location: "Flash Hero Pty Ltd",
    title: "Software Engineer - Internship",
    content: (
      <p>
        Developed the admin management system and FlashHero errand services
        platform project, including front-end and back-end.
        <br />
        Techs: SpringBoot, Vue, Java, JavaScript, Git
      </p>
    ),
  },
  {
    date: "SEP 2021 - AUG 2022",
    location: "Shenzhen Xindun Electronic Commerce Co., Ltd",
    title: "Software Engineer - Self Employed",
    content: (
      <p>
        Designed and developed the vehicle-to-sell information platform startup
        project. Including full-featured back-end interfaces and a front-end
        website.
        <br />
        Techs: SpringBoot, Vue, Java, JavaScript, Git, Element UI, MongoDB, Redis
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "Someone else",
      text: "Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.",
    },
    {
      name: "Someone else",
      text: "Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.",
    },
    {
      name: "Someone else",
      text: "Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.",
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Contact me.",
  description: "Feel free to contact me through email or linkedin.",
  items: [
    {
      type: ContactType.Email,
      text: "edenxu97@outlook.com",
      href: "mailto:edenxu97@outlook.com",
    },
    {
      type: ContactType.LinkedIn,
      text: "moxu97",
      href: "https://www.linkedin.com/in/moxu97/",
    },
    {
      type: ContactType.Location,
      text: "Sydney, Australia",
      href: "https://www.google.ca/maps/place/Sydney+NSW/@-33.847927,150.6517938,10z",
    },
    {
      type: ContactType.Github,
      text: "EdenX-97",
      href: "https://github.com/EdenX-97",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: "Github",
    Icon: GithubIcon,
    href: "https://github.com/EdenX-97",
  },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/moxu97/",
  },
];
