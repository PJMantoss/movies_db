import React, { Component } from 'react';
import List from './List';

export class MovieHome extends Component {
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
        const ids = [1,2,3,4,5,6,7,8,9,10];

        let listMovies = [];
    }

    ids.forEach(id => 
        fetch("http://api.tvmaze.com/shows?page=1" + id)
        .then(response => response.json())
        .then(show => {
            listMovies.push(show)
        })
    );

    this.setState({
        listMovies: listMovies.sort((a, b) => a.runtime - b.runtime)
    });

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
