import React from 'react'
import FrontDisplay from './FrontDisplay'
import WeatherDisplay from './WeatherDisplay'
import ToggleButton from './ToggleButton'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tempUnit: "C",
      weather: {
        location: "loading...", 
        temperature:0, 
        description:"analyzing",
        reportRequested: false 
      }
    }

    // method bindings
    this.toggleUnit = this.toggleUnit.bind(this)
    this.convert = this.convert.bind(this)
    this.fetchWeather = this.fetchWeather.bind(this)
    this.requestReport = this.requestReport.bind(this)
    this.getLatLong = this.getLatLong.bind(this)
  }

  /**
   * Get user location through geolocation.
   */
  getLatLong() {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(({coords}) => {
          resolve({lat: coords.latitude, long: coords.longitude})
        })
      }
    })
  }

  /**
   * use `fetch` to connect to OpenWeather's API and 
   * update the App state with the results
   * 
   * @param {user's latitude} lat 
   * @param {user's longitude} long 
   */
  fetchWeather(lat, long) {
    const APIkey = "d59d2aa357c3cd8a0cc48a9b48d95b6e"
    const CORSAPILink = "https://cors-anywhere.herokuapp.com/"
    const openWeatherEndpoint = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${APIkey}`
    const APIEndpoint = `${CORSAPILink}${openWeatherEndpoint}`

    fetch(APIEndpoint)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          weather: {
            location: json.name,
            temperature: this.convert("K", json.main.temp),
            description: json.weather[0].description
          }
        })
      })
  }

  /**
   * Flips the current weather state to either Celsius or Farenheit.
   */
  toggleUnit() {
    this.setState(({tempUnit, weather}) => 
      ({
        tempUnit: tempUnit === "C" ? "F" : "C",
        weather: {...weather, temperature: this.convert(tempUnit, weather.temperature)}
      }))
  }

  /**
   * Converts the temperature according to the app's needs.
   * 
   * @param {Unit of temperature (ex: "F")} tempUnit 
   * @param {The actual value of the temperature} temperature 
   */
  convert(tempUnit, temperature) {
    // Temperature is in Farenheit, convert to Celsius
    if (tempUnit === "C")
      return Number((temperature * (9/5) + 32).toFixed(2))
    // Temperature is in Celsius, convert to Farenheit
    else if (tempUnit === "F")
      return Number(((temperature - 32) * (5/9)).toFixed(2))
    // Temperature is in Kelvin, convert to Celsius
    else if (tempUnit === "K")
      return Number((temperature - 273.15).toFixed(2))
  }

  requestReport() {
    this.setState({reportRequested: true})
    this.getLatLong()
      .then(({lat, long}) => this.fetchWeather(lat, long))
  }


  render() {
    const {weather, tempUnit, reportRequested} = this.state

    return (
      <div className="App">
        <h1>Weather App</h1>
        <div className="SubComponents">
          {
            reportRequested ? 
            (<div>
            <WeatherDisplay weather={weather} tempUnit={tempUnit}/>
            <ToggleButton tempUnit={tempUnit} toggleUnit={this.toggleUnit}/>
            </div>):
            <FrontDisplay requestReport={this.requestReport} />
          }
        </div>
      </div>
    )
  }
}

export default App
