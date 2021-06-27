/*import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Header from '../../Header';
import ContactCard from './ContactCard';
import Footer from '../../Footer';
import landingImage from '../../resources/skillClassroom.jpeg';
import classroomImage from '../../resources/landing_picture.png';
import contentImage from '../../resources/content.jpeg';
import skillImage from '../../resources/new_skills.jpeg';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'HOME', url: '#' },
  { title: 'BLOG', url: '#' },
  { title: 'ABOUT US', url: '#' },
  { title: 'OUR SERVICES', url: '#' },
  { title: 'CONTACT US', url: '#' },
];

const mainFeaturedPost = {
  title: 'Welcome',
  description:
    "Building a community of lifelong learners. Skill Step Academy believes knowledge should be cheap and available to all",
  image: landingImage,
  imageText: 'main image description',
  linkText: 'Get to know us...',
};

const featuredPosts = [
  {
    title: 'Classroom learning',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: classroomImage,
    imageText: 'Image Text',
  },
  {
    title: 'Certificate Courses',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: skillImage,
    imageText: 'Image Text',
  },
  {
    title: 'Academic Content Developement',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: contentImage,
    imageText: 'Image Text',
  },
];

const posts = [];

const sidebar = {
  title: 'Work With Us',
  description:
    "Learning is easier when you have an excellent teacher. That's why most of our educators have achieved an advanced degree in their field.We are continuously looking for talented Subject Matter Experts who can work on our various types of projects such as Textbook Solution, Q&A Solution, Topic Writing, Video Solution, PowerPoint Presentation, etc. for K-12 and above level on their subject of expertise.",

  social: [
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
    { name: 'LinkedIn', icon: LinkedInIcon },
  ],
};

export default function Contact() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Skill Step Academy" sections={sections} />
        <main>
            <ContactCard title="Contact Us" posts={posts} />
        </main>
      </Container>
      <Footer
        title=""
        description="Striving to bring quality education and content"
      />
    </React.Fragment>
  );
}*/
