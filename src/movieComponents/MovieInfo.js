import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const classes = makeStyles(theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        GridTemplateRow: 'auto',
        gridGap: theme.spacing(5),
      },
      Grid: {
        textAlign: 'justify',
      },
    divider: {
        margin: theme.spacing(2, 0),
      },
    button: {
        margin: theme.spacing(1),
      },
    input: {
        display: 'none',
      },
  }));


export class MovieInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            movieDetails: {},
            loading: true
        }
    }


    componentDidMount(){

        let id = this.props.location.pathname.split('/')[2];

        fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
        .then((response) => response.json())
        .then((details) => {
            this.setState({
                movieDetails: details,
                loading: false
            });
        })
    }

    render() {
        return (
                <Container className={classes.root}>
                    {this.state.loading ? (
                    <div>Loading...</div>
                    ) : (
                    <div classname="movieDetails">
                        <div  className="posterContainer" style={{paddingTop: '3%'}}>
                            <div className="poster" style={{borderRadius: 5}}>
                                <Card>
                                    <CardMedia
                                        style={{height:550}}
                                        component="img" 
                                        image={this.state.movieDetails.image.original}
                                    />
                                    <CardContent style={{textAlign: 'justify'}}>
                                        <Button variant="contained" style={{backgroundColor: "#000000", color: "#ffffff"}}>
                                          <strong>{this.state.movieDetails.name}</strong>
                                        </Button><br/>
                                        <Button variant="outlined" className={classes.button}>
                                            <strong>Premiered: {this.state.movieDetails.premiered}</strong>
                                        </Button><br/>
                                        <Button startIcon={<StarRoundedIcon />} variant="contained" color="primary">
                                           {this.state.movieDetails.rating.average}
                                        </Button><br/>
                                        <Button variant="outlined" className={classes.button}>
                                            <strong>Genres: {this.state.movieDetails.genres.map((genre, id) => {
                                                return (
                                                    <span key={id}>
                                                        {genre + ' '}
                                                    </span>
                                                    )
                                                }
                                            )}</strong>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="movieInfo" xs={8} style={{textAlign: 'justify', }}>
                                <div className="summary">
                                    <Button variant="contained" style={{backgroundColor: "#000000", color: "#ffffff"}}>
                                        <h3>Summary</h3>
                                    </Button>
                                    <br/>
                                    {this.state.movieDetails.summary}
                                </div>
                                <Divider />
                                <div className="language">
                                  <Button variant="contained" color="primary" className={classes.button}>
                                     <strong>Language:</strong>
                                  </Button> {this.state.movieDetails.language}
                                </div>
                                <Divider />
                                <div className="runtime">
                                  <Button variant="contained" style={{backgroundColor: "#800080", color: "#ffffff"}}>
                                  <strong>Runtime:</strong>
                                  </Button> {this.state.movieDetails.runtime}
            
                                </div>
                                <Divider />
                                <div className="schedule">
                                    <Button variant="contained" style={{backgroundColor: "#FF1493", color: "#ffffff"}}>
                                      <strong>Schedule:</strong>
                                    </Button><br/>

                                    <Button variant="contained" startIcon={<AccessTimeIcon />} style={{backgroundColor: "#FFFF00", color: "#000000"}}>
                                        
                                    </Button> {this.state.movieDetails.schedule.time}<br/>
                                     
                                     <Button variant="contained" style={{backgroundColor: "#FFFF00", color: "#000000"}}>
                                         <strong>Days:</strong>
                                     </Button> {this.state.movieDetails.schedule.days.map((day, id) => {
                                        return (
                                            <span key={id}>
                                                {day + ' '}
                                            </span>
                                        )
                                    })}
                                </div>
                                <Divider />
                                 <div className="status">
                                     <Button variant="contained" style={{backgroundColor: "#008000", color: "#ffffff"}}>
                                       <strong>Status:</strong>
                                     </Button>
                                     {this.state.movieDetails.status}
                                </div>
                            </div>
                        </div>

                                    <div>
                                        <Button variant="contained" style={{backgroundColor: "#000000", color: "#ffffff"}}>
                                        <h3>Cast</h3><br/>
                                        </Button>
                                    </div>

                        <div className="castContainer">
                                
                            {this.state.movieDetails._embedded.cast.map((actor, id) => {
                                return (
                                    <div classname="cast" item xs={3} key={id}>
                                        <div>
                                           <Card>
                                                <CardMedia 
                                                   style={{height:350, width: 300}}
                                                   component="img" 
                                                   image={actor.person.image.original} 
                                                />
                                                <CardContent>
                                                    <Typography component="h2">
                                                       {actor.person.name}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="viewMore" item xs={3} style={{justifyContent: 'center', alignContent: 'center', paddingTop: '10%'}}>
                                <Link style={{ textDecoration: 'none' }} to="/">
                                    <Button variant="contained" color="primary">View More TV  Shows</Button>
                                </Link>
                            </div>
                        </div>
                    </div>)}
                    
                </Container>
        )
    }
}

export default MovieInfo
