import React, { Component } from 'react';
import MovieList from './MovieList';
import TextField from '@material-ui/core/TextField';

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: [],
            movieName: "",
            isFetching: false,
            importantText: ""
        }

        this.onMoviesInputChange = this.onMoviesInputChange.bind(this);
    }

    onMoviesInputChange = e => {
        this.setState({movieName:e.target.value, isFetching:true})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response) => response.json())
        .then(json => this.setState({movies: json, isFetching: false}))
    }

    render() {
        const { movies, movieName, isFetching, importantText } = this.state

        return (
            <div>
                <div>
                   <TextField
                       id="search" 
                       label="Search Movies" 
                       type="search"
                       margin="normal"
                       value={movieName} 
                       onChange={this.onMoviesInputChange}
                       helperText={importantText}
                    />
                </div>
                <div>
                        {
                            !isFetching && movies.length === 0 && movieName.trim() === ""
                            &&
                            <p>Plese enter a name</p>
                        }
                        {
                            !isFetching && movies.length === 0 && movieName.trim() !== ""
                            &&
                            <p>No Movies have been found with this name</p>
                        }
                        
                        {
                            !isFetching && <MovieList list={this.state.movies}/>
                        }
                </div>
            </div>
        )
    }
}

export default Search
