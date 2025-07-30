import { Expertise } from "../types/Expertise";
import { Project } from "../types/Project";
import { Technologies } from "../types/Technologies";

export const expertiseItems: Expertise[] = [
  {
    src: 'javascript',
    title: Technologies.javascript,
  },
  {
    src: 'api',
    title: Technologies.restApi,
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
  {
    src: 'react',
    title: Technologies.react,
  },
  {
    src: 'redux',
    title: Technologies.redux,
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
    src: 'react-router',
    title: Technologies.router,
  },
  {
    src: 'react-query',
    title: Technologies.tanStackQuery,
  },
  {
    src: 'bulma',
    title: Technologies.bulma,
  },
  {
    src: 'bootstrap',
    title: Technologies.bootstrap,
  },
  {
    src: 'material-ui',
    title: Technologies.mui,
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

export const projects: Project[] = [
  {
    title: 'Project Future',
    description: 'website',
    picture: '/images/project_future.jpg',
    gitHub: '',
    demo: 'https://internship-one-inky.vercel.app/en',
    technologies: [
      {
        src: 'nextjs',
        title: Technologies.next,
      },
      {
        src: 'material-ui',
        title: Technologies.material,
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
        src: 'api',
        title: Technologies.restApi,
      }
    ]
  },
  {
    title: 'The Ultimate Device Shop',
    description: 'React.js application',
    picture: '/images/phone_catalogue.jpeg',
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
        src: 'api',
        title: Technologies.restApi,
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
      }
    ]
  },
  {
    title: 'IP Address Tracker',
    description: 'React.js application',
    picture: '/images/ip_address.jpeg',
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
        src: 'api',
        title: Technologies.restApi,
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
      }
    ]
  },
  {
    title: 'Interactive Business Hub',
    description: 'landing page',
    picture: '/images/dia_landing.jpeg',
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
    title: 'List of posts',
    description: 'React.js application',
    picture: '/images/list_of_posts.jpeg',
    gitHub: 'https://github.com/serhii-yunnikov/react_redux-list-of-posts/tree/develop',
    demo: 'https://serhii-yunnikov.github.io/react_redux-list-of-posts/',
    technologies: [
      {
        src: 'react',
        title: Technologies.react,
      },
      {
        src: 'redux',
        title: Technologies.reduxToolkit,
      },
      {
        src: 'api',
        title: Technologies.restApi,
      },
      {
        src: 'typescript',
        title: Technologies.typescript,
      },
      {
        src: 'bulma',
        title: Technologies.bulma,
      }
    ]
  },
  {
    title: 'Cycle Haven',
    description: 'landing page',
    picture: '/images/bike_landing.jpeg',
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
];
