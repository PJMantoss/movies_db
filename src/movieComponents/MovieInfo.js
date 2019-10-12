import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
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

        let id = this.props.id;

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
                                    image={this.state.movieDetails.image}
                                />
                                <CardContent>
                                    <Typography component="h1">
                                       {this.state.movieDetails.name}
                                    </Typography>
                                    <Typography component="h3">
                                        Year: {this.state.movieDetails.premiered}
                                    </Typography >
                                    <Typography component="h3">
                                        Rating: {this.state.movieDetails.rating}
                                    </Typography>
                                    <Typography component="h3">
                                        Genre: {this.state.movieDetails.genres}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                </CardActions>
                            </Card>
                        </div>
                        <br/>

                        <div>
                            <h2>Summary</h2>
                            {this.state.movieDetails.summary}
                        </div>

                        <div>
                             {this.state.movieDetails.episodes}
                        </div>

                        <div>
                            <h3>Cast</h3>
                            {this.state.movieDetails.cast}
                        </div>
                    </div>)}
                </Container>
            </div>
        )
    }
}

export default MovieInfo
