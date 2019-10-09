import React from 'react'
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MovieListItem = ({movies}) => (
    <Link to={`/movies/${movies.show.id}`}>
        <ListItem button>
        <ListItemText primary={movies.show.name} />
        </ListItem>
    </Link>
)

function MovieList() {
    return (
        <div className="movieList">
            <List component="nav">
                {props.list.map(movies =>(
                    <MovieListItem movies={movies} key={movies.show.id} />
                ))}
            </List>
        </div>
    )
}

export default MovieList
