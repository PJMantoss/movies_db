import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


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

        fetch(`http://api.tvmaze.com/shows/${id}?embed=cast`)
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
            <div>
                <Container>
                    {this.state.loading ? (
                    <div>Loading...</div>
                    ) : (
                    <div>
                        <div>
                            <Card>
                                <CardMedia
                                    style={{height:400}}
                                    component="img" 
                                    image={this.state.movieDetails.image.medium}
                                />
                                <CardContent>
                                    <Typography component="h1">
                                       {this.state.movieDetails.name}
                                    </Typography>
                                    <Typography component="h3">
                                        Year: {this.state.movieDetails.premiered}
                                    </Typography >
                                    <Typography component="h3">
                                        Rating: {this.state.movieDetails.rating.average}
                                    </Typography>
                                    <Typography component="h3">
                                        Genre: {this.state.movieDetails.genres}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <br/>

                        <div>
                            <h2>Summary</h2>
                            {this.state.movieDetails.summary}
                        </div>

                        <br/>

                        <Grid container spacing={2}>
                            <h3>Cast</h3>
                            {this.state.movieDetails.cast.person.map((actor, id) => {
                                return (
                                    <Grid item xs={3} key={id}>
                                        <Card>
                                                <CardMedia 
                                                   style={{height:350}}
                                                   component="img" 
                                                   image={actor.image.medium} 
                                                />
                                                <CardContent>
                                                    <Typography component="h2">
                                                       {actor.name}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>)}
                </Container>
            </div>
        )
    }
}

export default MovieInfo
