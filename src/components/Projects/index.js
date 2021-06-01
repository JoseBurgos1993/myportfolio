import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '40px',
  },
  root2: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  centerleft: {
    marginLeft: '20%',
  },
  centerright: {
    marginRight: '20%',
  },
  gap: {
    paddingBottom: '30px',
  },
}));



export default function Projects() {
  const classes = useStyles();

    function CovidCard() {
        const classes = useStyles();
    
        return (
        <Card className={classes.root2}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image="mask.jpg"
                title="Covid Tracker"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                North Carolina Covid-19 Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                An application where you can view up-to-date stats on Covid-19 by county in North Carolina. Also contains links to helpful resources.
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                <a href="https://github.com/JoseBurgos1993/NC_Covid-19_Info" target="_blank" rel="noreferrer noopener">Github</a>
            </Button>
            <Button size="small" color="primary">
                <a href="https://joseburgos1993.github.io/NC_Covid-19_Info/" target="_blank" rel="noreferrer noopener">Deployed Site</a>
            </Button>
            </CardActions>
        </Card>
        );
    }
    function PetCard() {
        const classes = useStyles();
    
        return (
        <Card className={classes.root2}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image="./pawprint.png"
                title="PetMatch"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                PetMatch
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                A social media app for animals. Create a profile for your pet and meet other pet owners. Plan meet-ups. 
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                <a href="https://github.com/JoseBurgos1993/Petmatch" target="_blank" rel="noreferrer noopener">Github</a>
            </Button>
            <Button size="small" color="primary">
                <p>Deployed site under construction.</p>
            </Button>
            </CardActions>
        </Card>
        );
    }
                //<a href="https://github.com/JoseBurgos1993/Petmatch" target="_blank" rel="noreferrer noopener">Deployed Site</a>
    function BurgerCard() {
        const classes = useStyles();
    
        return (
        <Card className={classes.root2}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image="hamburger.png"
                title="Burgers"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Burgers
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                An app that uses Handlebars. Let's the user add and remove burgers from a list.
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                <a href="https://github.com/JoseBurgos1993/Burgers" target="_blank" rel="noreferrer noopener">Github</a>
            </Button>
            <Button size="small" color="primary">
                <a href="https://blooming-harbor-53033.herokuapp.com/" target="_blank" rel="noreferrer noopener">Deployed Site</a>
            </Button>
            </CardActions>
        </Card>
        );
    }
    function EloofCard() {
        const classes = useStyles();
    
        return (
        <Card className={classes.root2}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image="eloof.png"
                title="Eloof"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Eloof
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                A Christmas-themed gift registry. Children can create an account and add item to their wishlist. Parents can come in and decide which gifts they want to buy for their child.
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                <a href="https://github.com/JoseBurgos1993/Eloof" target="_blank">Github</a>
            </Button>
            <Button size="small" color="primary">
                <a href="https://eloof.herokuapp.com/" target="_blank">Deployed Site</a>
            </Button>
            </CardActions>
        </Card>
        );
    }
    


  function FormRow1() {
    return (
      <React.Fragment>
        <Grid item xs={3} className={classes.centerleft}>
          <CovidCard />
        </Grid>
        <Grid item xs={3} className={classes.centerright}>
          <EloofCard />
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={3} className={classes.centerleft}>
          <BurgerCard />
        </Grid>
        <Grid item xs={3} className={classes.centerright}>
          <PetCard />
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <div className={classes.root}>
    <Container maxWidth="xl">
        <Grid
            id="projects"
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid container item xs={12} spacing={3} className={classes.gap}>
                <FormRow1 />
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <FormRow2 />
            </Grid>
        </Grid>
    </Container>
    </div>
  );
}