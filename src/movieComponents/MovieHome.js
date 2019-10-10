import React, { Component } from 'react';
import Search from '../searchComponents/Search';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const classes = makeStyles(theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        GridTemplateRow: 'auto',
        gridGap: theme.spacing(3),
      },
    divider: {
        margin: theme.spacing(2, 0),
      },
  }));

export class MovieHome extends Component {

    constructor(props){
        super(props)
        this.state = {
            tvShow: [],
            openDetails: []
        }
        this.closeDetails.bind(this);
    }

    openDetails(id){
        this.setState({
            openDetails: {
                [id]: true
            }
        });
    }

    closeDetails(){
        this.setState({
            openDetails: false
        });
    }

    handleShowDetails(){
        this.openDetails();
    }

    componentDidMount(){
        fetch("http://api.tvmaze.com/shows")
        .then((response) => response.json())
        .then((results) => {
            this.setState({
                tvShow: results
            });
        })
    }

    render() {

        return (
            <div>
                <Search />
                
                    <div className={classes.root}>
                        <Typography variant="subtitle1" gutterBottom>
                               Movies/TV Shows
                        </Typography>

                        <Grid container spacing={3}>
                            {this.state.tvShow.map((item, i) => {
                                return(
                                    <Grid item xs={3}
                                        key={i} 
                                        onClick={this.openDetails.bind(this, i)} 
                                        onHide={this.closeDetails}
                                    >
                                        <Card>
                                            <CardMedia 
                                               style={{height:0, paddingTop: '56.25%'}}
                                               component="img" 
                                               image={item.image.original} 
                                            />
                                            <CardContent>
                                                <Typography component="h2">
                                                   {item.name}
                                                </Typography>

                                                <Typography component="h3">
                                                    Year: {item.premiered}
                                                </Typography >

                                                <Typography component="h3">
                                                    Rating: {item.rating.average}
                                                </Typography>
                                            </CardContent>

                                            <CardActions>
                                                <Button size="small" color="primary">
                                                    View
                                                </Button>
                                            </CardActions>
                                        </Card>
                                        
                                    </Grid>
                                )
                            })}

                        </Grid>
                    </div>
            </div>
        )
    }
}

export default MovieHome
