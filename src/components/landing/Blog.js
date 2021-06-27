import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Divider from '@material-ui/core/Divider';
import Header from '../../Header';
import MainFeaturedPost from '../../MainFeaturedPost';
import Typography from '@material-ui/core/Typography';
import FeaturedPost from './FeaturedPost';
import Main from '../../Main';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import LandingImage from '../../resources/skillClassroom.png';
import ClassroomImage from '../../resources/landing_picture.png';
import ContentImage from '../../resources/content.png';
import SkillImage from '../../resources/new_skills.png';
import {useRef} from 'react';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const sections = [
  { compRef:null,title: 'HOME', url: '#' },
  { compRef:null,title: 'ABOUT US', url: '#' },
  { compRef:null,title: 'OUR SERVICES', url: '#' },
  { compRef:null,title: 'JOIN US', url: '#' },
  { compRef:null,title: 'CONTACT US', url: '#' },
];

const mainFeaturedPost = {
  title: 'Welcome',
  description:
    "Building a community of lifelong learners. Skill Step Academy believes knowledge should be cheap and available to all",
  image: LandingImage,
  imageText: 'main image description',
  linkText: 'Get to know us...',
};

const featuredPosts = [
  {
    title: 'Classroom learning',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: ClassroomImage,
    imageText: 'Image Text',
  },
  {
    title: 'Certificate Courses',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: SkillImage,
    imageText: 'Image Text',
  },
  {
    title: 'Academic Content Developement',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: ContentImage,
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

export default function Blog() {
  const classes = useStyles();
  /*for(let i=0;i<sections.length;i++)
       sections[i].compRef = useRef();*/
  const home = useRef();     
  const join = useRef();  
  const services = useRef();     
  //const about = useRef();
  const contact = useRef(); 
  sections[0].compRef =home; 
  sections[1].compRef =home; 
  sections[2].compRef =services;
  sections[3].compRef =join;  
  sections[4].compRef =contact;    
  
         

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" ref={home}>
        <Header title="Skill Step Academy" sections={sections}/>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Typography ref={services} variant="h6" gutterBottom>
             Our Services
            </Typography>
            <Divider />
            <br></br>
          <Grid container  spacing={2}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main  myRef={contact} title="Contact Us" posts={posts} />
            <Sidebar
              myRef = {join}
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title=""
        description="Striving to bring quality education and content"
      />
    </React.Fragment>
  );
}
