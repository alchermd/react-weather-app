import React from 'react'

const ToggleButton = ({tempUnit}) =>
    (<div>
        <button>{tempUnit === "C" ? "F" : "C"}</button>
    </div>)

export default ToggleButton