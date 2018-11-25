import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import {Grid , Row , Col} from 'react-flexbox-grid';
import './App.css';
import ForecastExtenden from './components/ForecastExtended';
const cities = [
  'Barcelona,es',
  'Tremp,es',
  'Washington,us',
  'Paris,fr',
];
class App extends Component {

  constructor(){
    super();
    this.state = {city : null};
  }
  handledSelectedLocationClick = city1 =>{
    this.setState({city:city1});
  }
  render() {
    return (
      <Grid>
        <Row >
          <AppBar>
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row >
          <Col xs={12} md={6} className="locations">
            <LocationList  cities={cities} onSelectedLocation={this.handledSelectedLocationClick}></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper zDepth={4}>
              <div className="details">
              { this.state.city ?
                <ForecastExtenden city={this.state.city}></ForecastExtenden>
                : ''}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid> 
    );
  }
}

export default App;
