import React from 'react';
import './App.css';
import MovieHome from './movieComponents/MovieHome';
import Search from './searchComponents/Search';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  
  }

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

        <Search />

        <MovieHome />

        {this.state.rows}
  
      </div>
    );
  }
  
}

export default App;
