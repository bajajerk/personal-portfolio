module.exports = {
  siteTitle: 'Mayank Bajaj | Software Engineer',
  siteDescription:
    'Mayank Bajaj is a software engineer based in New Delhi, MA who specializes in building exceptional websites, mobile applications, and everything in between.',
  siteKeywords:
    'Mayank Bajaj, Mayank, Bajaj, NSIT, NSUT, software engineer, front-end engineer, web developer, javascript, delhi, india',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Mayank Bajaj',
  location: 'New Delhi, India',
  email: 'bajaj3743@gmail.com',
  github: 'https://github.com/bajajerk',
  twitterHandle: '@mayankkbajaj',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/bajajerk',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mayankbajaj',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/mayankb007',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mayankkbajaj',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/maynkkbajaj',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
