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
import TutorDialog from './TutorDialog'

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
      paddingTop: '100%',
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

export default function Cards(props){
  const tutors = props.tutorList;
  const [currentTutor, setCurrentTutor] = React.useState({});
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const classes = useStyles();

  const handleDialogOpen = (tutor) => {
    console.log(tutor);
    setCurrentTutor(tutor);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Container
      className={classes.cardGrid} 
      maxWidth="md"
      >
      <TutorDialog tutor={currentTutor} open={dialogOpen} onClose={handleDialogClose} />
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
                  {tutor.firstName} {tutor.lastName[0]}.
                </Typography>
                <Typography paragraph>
                  {tutor.areas}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handleDialogOpen(tutor)}>
                  Read more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

