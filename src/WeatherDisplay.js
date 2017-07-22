import React from 'react'

const WeatherDisplay = 
    ({weather={location: "loading...", temperature:0, description:"analyzing"}, tempUnit}) =>
        (<div>
            <h2>{weather.location}</h2>
            <h3>{weather.temperature.toFixed(2)} {tempUnit}</h3>
            <p>{weather.description}</p>
        </div>)

export default WeatherDisplay