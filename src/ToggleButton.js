import React from 'react'

const ToggleButton = ({tempUnit, toggleUnit}) =>
    (<div>
        <button onClick={() => toggleUnit()}>{tempUnit === "C" ? "F" : "C"}</button>
    </div>)

export default ToggleButton