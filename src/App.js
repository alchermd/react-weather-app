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

    // method bindings
    this.toggleUnit = this.toggleUnit.bind(this)
    this.convert = this.convert.bind(this)
  }

  toggleUnit() {
    this.setState(({tempUnit, weather}) => 
      ({
        tempUnit: tempUnit === "C" ? "F" : "C",
        weather: {...weather, temperature: this.convert(tempUnit, weather.temperature)}
      }))
  }

  convert(tempUnit, temperature) {
    if (tempUnit == "C")
      return Number((temperature * (9/5) + 32).toFixed(2))
    else
      return Number(((temperature - 32) * (5/9)).toFixed(2))
  }


  render() {
    const {weather, tempUnit} = this.state

    return (
      <div>
        <h1>Weather App</h1>
        <hr/>
        <WeatherDisplay weather={weather} tempUnit={tempUnit}/>
        <ToggleButton tempUnit={tempUnit} toggleUnit={this.toggleUnit}/>
      </div>
    )
  }
}

export default App
