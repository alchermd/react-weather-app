import React from 'react'
import WeatherDisplay from './WeatherDisplay'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tempUnit: "C",
      weather: {
        location: "Malolos",
        temperature: 24.5,
        description: "Light Rain"
      }
    }
  }



  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <hr/>
        <WeatherDisplay weather={this.state.weather}/>
      </div>
    )
  }
}

export default App
