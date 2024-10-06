import { FaFeather } from 'react-icons/fa6';
import { LuEye } from 'react-icons/lu';
import { TfiShine } from 'react-icons/tfi';

export const navOptions = [
  { label: 'Product', route: '/product' },
  { label: 'Services', route: '/services' },
  { label: 'About', route: '/about' }
];

export const serviceList = [
  {
    title: 'Cool feature title',
    description: 'Learning curve network effects return on investment.',
    img: '/image-1.png'
  },
  {
    title: 'Even cooler feature',
    description: 'Learning curve network effects return on investment.',
    img: '/image-2.png'
  },
  {
    title: 'Cool feature title',
    description: 'Learning curve network effects return on investment.',
    img: '/image-3.png'
  }
];

export const customerService = [
  { label: 'We connect our customers with the best.', Icon: FaFeather },
  { label: 'Advisor success customer launch party.', Icon: LuEye },
  { label: 'Business-to-consumer long tail.', Icon: TfiShine }
];

export const TESTIMONIALS = [
  {
    message: 'Buyer buzz partner network disruptive non-disclosure agreement business',
    image: '/profile-1.png',
    name: 'Albus Dumbledore',
    work: 'Manager @ Howarts'
  },
  {
    message: 'Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.',
    image: '/profile-2.png',
    name: 'Severus Snape',
    work: 'Manager @ Slytherin'
  },
  {
    message: 'Release facebook responsive web design business model canvas seed money monetization.',
    image: '/profile-3.png',
    name: 'Harry Potter',
    work: 'Team Leader @ Gryffindor'
  }
];

export const CATEGORIES = [
  {
    image: '/image-1.png',
    category: 'Category',
    date: 'November 22, 2021',
    message: 'Pitch termsheet backing validation focus release.',
    icon: '/profile-4.png',
    name: 'Chandler Bing'
  },
  {
    image: '/cat-2.jpeg',
    category: 'Category',
    date: 'November 22, 2021',
    message: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    icon: '/profile-5.png',
    name: 'Rachel Green'
  },
  {
    image: '/cat-3.png',
    category: 'Category',
    date: 'November 22, 2021',
    message: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    icon: '/profile-6.png',
    name: 'Monica Geller'
  }
];
