import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    /* this.state = {rows: movieRows}
    console.log('My Initializer')

    const movies = [
      {
        id:0, 
        poster_src: "https://static.tvmaze.com/uploads/images/medium_portrait/211/529326.jpg", 
        title:"Raising Dion", 
        overview:"First overview"
      },
      {
        id:1, 
        poster_src: "https://static.tvmaze.com/uploads/images/medium_portrait/209/523174.jpg", 
        title:"Batwoman", 
        overview:"Second overview"
      }
    ]

    const movieRows = []
    movies.forEach((movie) => {
       console.log(movie.title)
       const movieRow = <table key={movie.id} >
         <tr>
           <td>
             <img alt="poster" width="100" src={movie.poster_src} />
           </td>
           <td>
             {movie.title}
             <p>{movie.overview}</p>
           </td>
         </tr>
       </table>
       movieRows.push(movieRow)
    }) */

    this.performSearch = this.performSearch.bind(this)
  }

  performSearch(){}

  render(){
    return (
      <div className="App">
        <table className="tableHead">
          <tbody>
            <tr>
              <td> <img alt="app icon" width="85" src="https://img.icons8.com/clouds/200/000000/retro-tv.png" /> </td>
              <td width="10" />
              <td>
                <h1>Movies Database</h1>
              </td>
            </tr>
          </tbody>
        </table>
  
        <input placeholder="Search Bar" className="searchBar" />
  
      </div>
    );
  }
  
}

export default App;
