import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const phoneNumber = '+49 151 26165572';
const emailAddress = 'serhii.yunnikov@gmail.com';

export const contacts = [
  {
    icon: GitHubIcon,
    label: 'Visit my GitHub',
    href: 'https://github.com/serhii-yunnikov'
  },
  {
    icon: LinkedInIcon,
    label: 'Visit my LinkedIn',
    href: 'https://www.linkedin.com/in/serhii-yunnikov-897217279'
  },
  {
    icon: PhoneIcon,
    label: phoneNumber,
    href: `tel:${phoneNumber}`
  },
  {
    icon: EmailIcon,
    label: emailAddress,
    href: `mailto:${emailAddress}`
  }
];
