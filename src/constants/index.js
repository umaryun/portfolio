import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  ehealth,
  shamrock,
  headstarter,
  hng,
  shopt,
  kelhel,
  pantry,
  microverse,
  xClone,
  chowtime,
  password,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Testing',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'ICT Services',
    company_name: 'eHealth Africa',
    icon: ehealth,
    iconBg: '#333333',
    date: 'Sep 2024 - Present',
  },
  {
    title: 'Software Engineer',
    company_name: 'Shamrock Innovations',
    icon: shamrock,
    iconBg: '#333333',
    date: 'July 2024 - Oct 2024',
  },
  {
    title: 'Software Engineer',
    company_name: 'Headstarter AI',
    icon: headstarter,
    iconBg: '#333333',
    date: 'May 2024 - July 2024',
  },
  {
    title: 'Backend engineer',
    company_name: 'HNG',
    icon: hng,
    iconBg: '#333333',
    date: 'Jan 2024 - April 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'AI assistant',
    description: 'A customer service assistant for an e commerce start up.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'next JS',
        color: 'green-text-gradient',
      },
      {
        name: 'material UI',
        color: 'pink-text-gradient',
      },
    ],
    image: shopt,
    repo: 'https://github.com/umaryun/shopIt-AI-assistant',
    demo: 'https://shop-it-ai-assistant.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'X clone',
    description:
      'A clone of the renowned X website, replicating its core features and user experience.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: xClone,
    repo: 'https://github.com/umaryun/x-clone',
    demo: 'https://x-clone-two-silk.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Chowtime',
    description: 'Your grocery list on the GO!. a synchronized shopping list app',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: chowtime,
    repo: 'https://github.com/umaryun/chowtime',
    demo: 'https://chowtime-mu.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'password generator',
    description: `A platform to generate an unlimited amount of secured selective passwords.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: password,
    repo: 'https://github.com/umaryun/password-generator',
    demo: 'https://password-generator-snowy-eight.vercel.app/',
  },
  {
    id: 'project-5',
    name: 'Pantry app',
    description:
      'an inventory web app to keep track of items in the inventory.',
    tags: [
      {
        name: 'MaterialUi',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'NextJs',
        color: 'pink-text-gradient',
      },
    ],
    image: pantry,
    repo: 'https://github.com/umaryun/pantry',
    demo: 'https://pantry-app-ochre.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
