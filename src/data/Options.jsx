import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaGitlab } from 'react-icons/fa6';
import { FaHashnode } from 'react-icons/fa6';
import { MdFacebook } from 'react-icons/md';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { SiFrontendmentor } from 'react-icons/si';
import { SiCodewars } from 'react-icons/si';
import { TbBrandGithubFilled } from 'react-icons/tb';

const options = [
  {
    icon: <TbBrandGithubFilled />,
    platform: 'GitHub',
    color:'#191919'
  },
  {
    icon: <SiFrontendmentor />,
    platform: 'Frontend Mentor',
    color:'#ffffff'
  },
  {
    icon: <FaTwitter />,
    platform: 'Twitter',
    color:'#43b7e9'
  },
  {
    icon: <RiLinkedinBoxFill />,
    platform: 'LinkedIn',
    color:'#2d68ff'
  },
  {
    icon: <FaYoutube />,
    platform: 'YouTube',
    color:'#ee3939'
  },
  {
    icon: <MdFacebook />,
    platform: 'Facebook',
    color:'#2442ac'
  },
  {
    icon: <FaTwitch />,
    platform: 'Twitch',
    color:'#ee3fc8'
  },
  {
    icon: <FaDev />,
    platform: 'Dev.to',
    color:'#333333'
  },
  {
    icon: <SiCodewars />,
    platform: 'Codewars',
    color:'#8a1a50'
  },
  {
    icon: <FaCodepen />,
    platform: 'Codepen',
    color:'#464646'
  },
  {
    icon: <FaFreeCodeCamp />,
    platform: 'FreeCodeCamp',
    color:'#302267'
  },
  {
    icon: <FaGitlab />,
    platform: 'GitLab',
    color:'#eb4925'
  },
  {
    icon: <FaHashnode />,
    platform: 'Hashnode',
    color:'#0330d1'
  },
  {
    icon: <FaStackOverflow />,
    platform: 'Stack Overflow',
    color:'#ec7100'
  },
];

export default options;
