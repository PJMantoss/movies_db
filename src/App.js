import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'whatwg-fetch';
import Home from './Home';
import Footer from './Footer' 

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        
          <div className="header">

              <div className="App-logo">
                  <img alt="app icon" width="85" src="https://img.icons8.com/clouds/200/000000/retro-tv.png" />
              </div>

              <div className="siteName">
                  <h1>Movies Database</h1>
              </div>

              <div className="homeBtn">
                  <Link style={{ textDecoration: 'none' }} to="/">
                    <HomeRoundedIcon />
                  </Link>
              </div>

          </div>

        <AppBar position="static" >
            <Toolbar >
                <Typography variant="subtitle1" color="inherit" style={{flex:1}} align="center">
                  Look Up Your Favorite TV Shows and Movies
                </Typography>
            </Toolbar>
        </AppBar>

        <Home />
        <Footer />
      </div>
    );
  }
  
}

export default App;
