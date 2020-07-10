// to intsall react run
// ~npm install react-dom react babel-preset-react --save-dev
// add react babel preset to package.json
"babel": {
  "presets": [
      "es2015",
      "react"
  ]
}
// next a div to HTMLElement
// <div id="root"></div>
// at top of react file import
// Promises
// get a json api
// grab the api key

const api_key = 'guhusceiiu789es6f8fuhwi';

import React, { Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props){
    super(props);
      this.state ={
        city: 'San Fransisco',
        description: ''
      }
    }
    componentDidMount() {
      this.grabWeather(this.state.city);
    }
    grabWeather(city) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
        .then(response => response.json())
        .then(json => {
          this.setState({description: json.weather[0].description})
        });
  }
  render() {
    return (
      <div>
      <h1> Weather Report for {this.state.city}!</h1>
      <h2>{this.state.description}</h2>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root');)
