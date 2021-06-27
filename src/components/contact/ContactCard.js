/*import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import location from '../../resources/location.jpeg';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import MailIcon from '@material-ui/icons/Mail';
import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  root: {
    maxWidth: 6000,
  },
  media: {
    height: 240,
  },
  mediaI: {
    height: 80,
  },
});


function ContactCard(props) {
  const classes = useStyles();
  const { posts, title } = props;
  const contact =  [
    { name: '+91 80139 93477', icon: PhoneIcon },
    { name: 'zaman@skillstepacademy.com', icon: MailIcon },
    { name: '40B, Kabitirtha Sarani, Kolkata,West Bengal India', icon: BusinessIcon },
    { name: 'Business Hours : Mon-Sat : 09:00 AM - 09:00 PM', icon: ScheduleIcon },

  ];
  return (
    <Grid item xs={12} md={12}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <br/>
      <Grid item xs={12} md={12} >
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {location}
          title= 'Better Meet Us In Person'
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h2">
           Better Yet ,See Us In Person
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We love our customers, so feel free to visit us during normal business hours.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Message us on WhatsApp <WhatsAppIcon filled/>
          </Typography>
          <br/>
          <Typography gutterBottom variant="sh6" component="h2">
           Skill Step Academy
          </Typography>
          <Divider/>
          {contact.map((network) => (
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
      ))}
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
      
    </Grid>
  );
}*/


export default ContactCard;
