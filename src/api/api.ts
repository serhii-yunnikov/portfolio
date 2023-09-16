import { Expertise } from "../types/Expertise";
import { Project } from "../types/Project";
import { Technologies } from "../types/Technologies";

export const expertiseItems: Expertise[] = [
  {
    src: 'api',
    title: Technologies.restApi,
  },
  {
    src: 'css',
    title: Technologies.css,
  },
  {
    src: 'html',
    title: Technologies.html,
  },
  {
    src: 'javascript',
    title: Technologies.javascript,
  },
  {
    src: 'react',
    title: Technologies.react,
  },
  {
    src: 'redux',
    title: Technologies.redux,
  },
  {
    src: 'sass',
    title: Technologies.sass,
  },
  {
    src: 'typescript',
    title: Technologies.typescript,
  },
  {
    src: 'nextjs',
    title: Technologies.next,
  },
  {
    src: 'material-ui',
    title: Technologies.mui,
  },
  {
    src: 'react-router',
    title: Technologies.router,
  },
  {
    src: 'react-query',
    title: Technologies.tanStackQuery,
  },
  {
    src: 'figma',
    title: Technologies.figma,
  },
  {
    src: 'git',
    title: Technologies.git,
  },
  {
    src: 'npm',
    title: Technologies.npm,
  },
  {
    src: 'visual-studio-code',
    title: Technologies.vsCode,
  }
];

// const phone_catalogue
// = 'responsive web app, providing a \
// seamless device shopping experience with features like a cart, \
// task management, and an intuitive user interface across devices.';
// const dia = 'dynamic landing page for business info and communication.';
// const bike = 'Landing page. Bike shop for bicycles.';
// const game = 'puzzle game, based on javascript where players \
// strategically slide numbered tiles on a grid to combine them.';

export const projects: Project[] = [
  {
    title: 'The Ultimate Device Shop',
    description: 'React.js application',
    picture: 'src/assets/images/phone_catalogue.jpeg',
    gitHub: 'https://github.com/serhii-yunnikov/phone-catalog',
    demo: 'https://serhii-yunnikov.github.io/phone-catalog/',
    technologies: [
      {
        src: 'react',
        title: Technologies.react,
      },
      {
        src: 'context',
        title: Technologies.context,
      },
      {
        src: 'react-router',
        title: Technologies.router,
      },
      {
        src: 'typescript',
        title: Technologies.typescript,
      },
      {
        src: 'css',
        title: Technologies.css,
      },
      {
        src: 'sass',
        title: Technologies.sass,
      },
      {
        src: 'html',
        title: Technologies.html,
      },
    ]
  },
  {
    title: 'IP Address Tracker',
    description: 'React.js application',
    picture: 'src/assets/images/ip_address.jpeg',
    gitHub: 'https://github.com/serhii-yunnikov/ip-address-tracker',
    demo: 'https://serhii-yunnikov.github.io/ip-address-tracker/',
    technologies: [
      {
        src: 'react',
        title: Technologies.react,
      },
      {
        src: 'react-query',
        title: Technologies.tanStackQuery,
      },
      {
        src: 'typescript',
        title: Technologies.typescript,
      },
      {
        src: 'css',
        title: Technologies.css,
      },
      {
        src: 'sass',
        title: Technologies.sass,
      },
      {
        src: 'html',
        title: Technologies.html,
      },
    ]
  },
  {
    title: 'Interactive Business Hub',
    description: 'landing page',
    picture: 'src/assets/images/dia_landing.jpeg',
    gitHub: 'https://github.com/serhii-yunnikov/Dia-landing',
    demo: 'https://serhii-yunnikov.github.io/Dia-landing/',
    technologies: [
      {
        src: 'html',
        title: Technologies.html,
      },
      {
        src: 'css',
        title: Technologies.css,
      },
      {
        src: 'sass',
        title: Technologies.sass,
      },
      {
        src: 'javascript',
        title: Technologies.javascript,
      }
    ]
  },
  {
    title: 'Cycle Haven',
    description: 'landing page',
    picture: 'src/assets/images/bike_landing.jpeg',
    gitHub: 'https://github.com/serhii-yunnikov/bike-landing',
    demo: 'https://serhii-yunnikov.github.io/bike-landing/',
    technologies: [
      {
        src: 'html',
        title: Technologies.html,
      },
      {
        src: 'css',
        title: Technologies.css,
      },
      {
        src: 'sass',
        title: Technologies.sass,
      },
      {
        src: 'javascript',
        title: Technologies.javascript,
      }
    ]
  },
  {
    title: 'Block Merge',
    description: 'Javascript game',
    picture: 'src/assets/images/puzzle_game.jpeg',
    gitHub: 'https://github.com/serhii-yunnikov/2048-game',
    demo: 'https://serhii-yunnikov.github.io/2048-game/',
    technologies: [
      {
        src: 'html',
        title: Technologies.html,
      },
      {
        src: 'css',
        title: Technologies.css,
      },
      {
        src: 'sass',
        title: Technologies.sass,
      },
      {
        src: 'javascript',
        title: Technologies.javascript,
      }
    ]
  }
];
