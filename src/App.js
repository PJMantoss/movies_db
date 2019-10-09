import React from 'react';
import './App.css';

function Movies(){
  return(
        <div>
            <div>{}</div>
            <div></div>
        </div>
  )
}

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
  
        <input placeholder="Search Bar" className="searchBar" />

        <Movies />

        {this.state.rows}
  
      </div>
    );
  }
  
}

export default App;
