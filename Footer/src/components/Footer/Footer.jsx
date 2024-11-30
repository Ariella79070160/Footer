import clsx from 'clsx';
import {
  RiFacebookBoxLine,
  RiGithubLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from 'react-icons/ri';

import Link from '../ui/Link';


const shopCategories = [
    {
      title: 'Unisex',
      href: '#',
    },
    {
      title: 'Women',
      href: '#',
    },
    {
      title: 'Men',
      href: '#',
    },
];
  
const shopCollections = [
    {
      title: 'Latest arrivals',
      href: '#',
    },
    {
      title: 'Urban Oasis',
      href: '#',
    },
    {
      title: 'Cozy Comfort',
      href: '#',
    },
    {
      title: 'Fresh Fusion',
      href: '#',
    },
];
  
const footerSocials = [
    {
      icon: RiYoutubeLine,
      url: 'https://youtube.com',
      name: "Link to Stylenest's youtube profile",
    },
    {
      icon: RiInstagramLine,
      url: 'https://instagram.com',
      name: "Link to Stylenest's instagram profile",
    },
    {
      icon: RiFacebookBoxLine,
      url: 'https://facebook.com',
      name: "Link to Stylenest's facebook profile",
    },
    {
      icon: RiGithubLine,
      url: 'https://github.com',
      name: "Link to Stylenest's github profile",
    },
    {
      icon: RiTwitterXLine,
      url: 'https://twitter.com',
      name: "Link to Stylenest's twitter profile",
    },
];


const Footer = () => {
    return(
        <footer>
            <div>
                
            </div>
        </footer>
    )
}

export default Footer