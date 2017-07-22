import React from 'react'
import WeatherDisplay from './WeatherDisplay'
import ToggleButton from './ToggleButton'

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
    const {weather, tempUnit} = this.state

    return (
      <div>
        <h1>Weather App</h1>
        <hr/>
        <WeatherDisplay weather={weather}/>
        <ToggleButton tempUnit={tempUnit}/>
      </div>
    )
  }
}

export default App
