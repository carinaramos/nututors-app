import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({

    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

export default function TutorList(props){

        const tutors = props.tutorList;
        const classes = useStyles();
        
        return (
          <Container 
            className={classes.cardGrid} 
            maxWidth="md">
            <Grid container spacing={4}>
              {tutors.map((tutor) => (
                <Grid item key={tutor._id} xs={12} sm={6} md={4}>
                  <Card 
                    className={classes.card}
                    >
                    <CardMedia
                      className={classes.cardMedia}
                      image={tutor.imageURL}
                    />
                    <CardContent 
                        className={classes.cardContent}
                        >
                      <Typography gutterBottom variant="h5" component="h2">
                        {tutor.firstName} {tutor.lastName}
                      </Typography>
                      <Typography>
                        {tutor.email}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        );
}

