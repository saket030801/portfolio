import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  QuotesSection,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Quotes: 'quotes',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Saket Ramsinghani.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an India based <strong className="text-stone-100">Full Stack Software Engineer</strong>, specialised in
        building web apps using React, Tailwind CSS and Nodejs.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing Chess, reading books, or listening Hip-Hop music.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1kuuccTqoZQApjx12hYKzo_8kif7G6rSg/view?usp=drive_link',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a dedicated full stack engineer with a relentless passion for exploring and mastering diverse technologies. I thrive on the thrill of continuous learning, and I take pride in assuming full responsibility for my work, ensuring its excellence and success.`,
  aboutItems: [
    {label: 'Location', text: 'Jabalpur, MP', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'India', Icon: FlagIcon},
    {label: 'Interests', text: 'Music, Books, System Design', Icon: SparklesIcon},
    {label: 'Study', text: 'BIT Mesra', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Express',
        level: 5,
      },
    ],
  },
  {
    name: 'Theory',
    skills: [
      {
        name: 'DBMS',
        level: 8,
      },
      {
        name: 'System Design',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Social Media Application',
    description: 'Social Media Application to share your pics',
    url: 'https://memories1159.netlify.app/',
    image: porfolioImage1,
  },
  {
    title: 'Chat Application',
    description: 'Room based chat application',
    url: 'https://chat-application-7.netlify.app/',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2019- July 2023',
    location: 'BIT Mesra',
    title: 'B.Tech in InformationTechnology',
    content: (
      <p>
        I have successfully completed my graduation in Information Technology with an outstanding CGPA of 8.9,
        demonstrating my commitment to academic excellence and my passion for the field.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2023 - July 2023',
    location: 'GEP Solutions',
    title: 'SDE Intern',
    content: (
      <p>
        • Implemented a robust API, that enabled seemless communication between backend and frontend systems.
        <br />
        • Meticulously designed and implemented the API, ensuring its efficiency, security, and scalability.
        <br />• Tech stack used: C-Sharp, Angular.
      </p>
    ),
  },
  {
    date: 'May 2022 - July 2022',
    location: 'Samsung',
    title: 'SDE Intern',
    content: (
      <p>
        • Stylized a 3D mesh by predicting colors and local geometric details that conform to a target text prompt.
        <br />
        • In order to modify style, a similarity score between a text prompt (describing style) and a stylized mesh is
        obtained by harnessing the representational power of CLIP.
        <br />• CLIP (Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text)
        pairs.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const quote: QuotesSection = {
  imageSrc: testimonialImage,
  quotes: [
    {
      name: 'Aaron Swartz',
      text: 'Information is power. But like all power, there are those who want to keep it to themselves',
    },
    {
      name: 'Tim Berners-Lee',
      text: 'The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.',
    },
    {
      name: 'Karl Marx',
      text: 'Religion is the opium of the people. It is the sigh of the oppressed creature, the heart of a heartless world, and the soul of our soulless conditions.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'saket030801@gmail.com',
      href: 'mailto:saket030801@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Jabalpur, India',
      href: 'https://www.google.com/maps/place/Jabalpur,+Madhya+Pradesh/@23.175925,79.8039436,11z/data=!3m1!4b1!4m6!3m5!1s0x3981ae1a0fb6a97d:0x44020616bc43e3b9!8m2!3d23.1685786!4d79.9338798!16zL20vMDJkcm5r?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@saketramsinghani',
      href: 'https://www.instagram.com/saketramsinghani/',
    },
    {
      type: ContactType.Github,
      text: 'saket030801',
      href: 'https://github.com/saket030801',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/saket030801'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/saketramsinghani/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/saketramsinghani/'},
];
