import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../searchComponents/Search';
import Pagination from './Pagination';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import StarRoundedIcon from '@material-ui/icons/StarRounded';



export class MovieHome extends Component {

    constructor(props){
        super(props)
        this.state = {
            tvShows: [],
            currentShows: [],
            currentPage: null,
            totalPages: null
        }
    }


    componentDidMount(){
        fetch("http://api.tvmaze.com/shows/")
        .then((response) => response.json())
        .then((results) => {
            this.setState({
                tvShows: results
            });
        })
    }

    onPageChanged = data => {
      const { tvShows } = this.state;
      const { currentPage, totalPages, pageLimit } = data;
  
      const offset = (currentPage - 1) * pageLimit;
      const currentShows = tvShows.slice(offset, offset + pageLimit);
  
      this.setState({ currentPage, currentShows, totalPages });
    }

    render() {

          const { tvShows, currentShows, currentPage, totalPages } = this.state;

          const totalShows = tvShows.length;

          if (totalShows === 0) return null;

          const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

        return (
                <Container>
                    <Search />

                    <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">

                          <div className="d-flex flex-row align-items-center">

                              <h2 className={headerClass}>
                                <strong className="text-secondary">{totalShows}</strong> TV Shows
                              </h2>
                              
                              { currentPage && (
                                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                                  Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                                </span>
                              ) }

                          </div>

                          <div className="d-flex flex-row py-4 align-items-center">
                            <Pagination totalRecords={totalShows} pageLimit={16} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                          </div>
                          
                    </div>

                    <Grid container spacing={3}>
                        {currentShows.map((item, id) => {
                            return(
                                <Grid item xs={3}
                                    key={id} 
                                    style={{textAlign: 'justify'}} 
                                >
                                    <Link style={{ textDecoration: 'none' }} to={`/movieinfo/${item.id}`}  >
                                    <Card>
                                        <CardMedia 
                                            style={{height:400}}
                                            component="img" 
                                            image={item.image.original} 
                                        />
                                        <CardContent>
                                            <Button variant="contained" style={{backgroundColor: "#000000", color: "#ffffff"}}>
                                                {item.name}
                                            </Button><br/>
                                            <Button variant="outlined">
                                                Premiered: {item.premiered}
                                            </Button><br/>
                                            <Button startIcon={<StarRoundedIcon />} variant="contained" color="primary">
                                                {item.rating.average}
                                            </Button>
                                        </CardContent>
                                        <CardActions>
                                        </CardActions>
                                    </Card>
                                    </Link>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            )
        }
    }
    

export default MovieHome