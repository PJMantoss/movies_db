import React, { Component } from 'react';
import Search from '../searchComponents/Search';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
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
        fetch("http://api.tvmaze.com/shows?page=1")
        .then((response) => response.json())
        .then((results) => {
            this.setState({
                tvShow: results
            });
        })
    }

    render() {
        const classes = useStyles();

        return (
            <div>
                <Search />
                
                    <div className={classes.root}>
                        <GridList cellHeight={250} className={classes.gridList}>

                            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                               <ListSubheader component="div">Movies/TV Shows</ListSubheader>
                            </GridListTile>

                            {this.state.tvShow.map((item, i) => {
                                return(
                                    <GridListTile 
                                        key={i} 
                                        onClick={this.openDetails.bind(this, i)} 
                                        onHide={this.closeDetails}
                                    >
                                        <img src={item.item.show.image.medium} alt={item.title} />
                                        <GridListTileBar
                                            title={item.show.name}
                                            subtitle={item.show.premiered}
                                            subtitle={show.rating.average}
                                        />
                                    </GridListTile>
                                )
                            })}

                        </GridList>
                    </div>
            </div>
        )
    }
}

export default MovieHome
