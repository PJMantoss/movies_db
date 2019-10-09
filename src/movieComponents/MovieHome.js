import React, { Component } from 'react';
import List from './List';

class MovieHome extends Component {
    constructor(props){
        super(props)
        this.state = {
            listMovies: []
        }

        this.getListMovies = this.getListMovies.bind(this)
    }

    componentDidMount(){
        this.getListMovies();
    }

    getListMovies(){

        let listMovies = [];

     
            fetch("http://api.tvmaze.com/shows?page=1")
            .then(response => response.json())
            .then(show => {
                listMovies.push(show);
            })


    this.setState({
        listMovies: listMovies.sort((a, b) => a.runtime - b.runtime)
    });
}

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <List data={this.state.listMovies} />
            </div>
        )
    }
}

export default MovieHome
