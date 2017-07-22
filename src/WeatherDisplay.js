import React from 'react'

const WeatherDisplay = ({weather, tempUnit}) =>
    (<div>
        <h2>{weather.location}</h2>
        <h3>{weather.temperature} {tempUnit}</h3>
        <p>{weather.description}</p>
    </div>)

export default WeatherDisplay