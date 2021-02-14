import React from 'react';
import './style.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    root2: {
      maxWidth: 445,
    },
    media: {
      height: 500,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

export default function Contact(){
    const classes = useStyles();
    return(
        <div id="about" >
            <Container maxWidth="md" style={{marginTop: "40px"}}>
                <Typography component="div" style={{ backgroundColor: 'white', height: '340px'}}>
                    <div style={{padding: '20px'}}>
                        <img id="floatleft" src="./joseburgos.jpg" width="300" height="300" alt="This is my face"></img>
                        <div id="floatright">
                            <h2>About Me</h2>
                            <p>
                                My name is Jose Burgos. I was born in Killeen, Texas in 1993. I graduated from Texas A&M University at Central Texas in 2016 with a degree in Computer Science. I have a certificate in Full Stack Web Development from the University of North Carolina. You can follow me on <a href="https://www.linkedin.com/in/jose-burgos-5b6214135/">LinkedIn</a> and <a href="https://github.com/JoseBurgos1993">Github</a>.
                            </p>
                        </div>
                    </div>
                </Typography>
                
                
            </Container>
            
        </div>
    );
}
/*
<Card
                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
                className={classes.root2}
            >
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="dumbanimememe.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        WORDS WORDS WORDS
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Github
                </Button>
                <Button size="small" color="primary">
                    LinkedIn
                </Button>
                </CardActions>
            </Card>
*/