import React from 'react'

const WeatherDisplay = ({weather}) =>
    (<div>
        <h2>{weather.location}</h2>
        <h3>{weather.temperature}</h3>
        <p>{weather.description}</p>
    </div>)

export default WeatherDisplay