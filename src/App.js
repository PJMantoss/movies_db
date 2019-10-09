import React from 'react';
import './App.css';
import 'whatwg-fetch';
import Home from './Home';

class App extends React.Component {

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

        <Home />
  
      </div>
    );
  }
  
}

export default App;
