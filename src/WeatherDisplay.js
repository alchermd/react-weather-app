import React from 'react'

const WeatherDisplay = 
    ({weather, tempUnit}) =>
        (<div>
            <h2>{weather.location}</h2>
            <h3>{weather.temperature.toFixed(2)} &deg; {tempUnit}</h3>
            <p><em>{weather.description}</em></p>
        </div>)

export default WeatherDisplay