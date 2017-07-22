import React from 'react'

const ToggleButton = ({tempUnit, toggleUnit}) => {
    const toggledUnit = tempUnit === "C" ? "F" : "C"
    const icon = toggledUnit === "C" ? 
        <i className="fa fa-toggle-off" aria-hidden="true"></i> :
        <i className="fa fa-toggle-on" aria-hidden="true"></i>

    return (<div>
        <button onClick={() => toggleUnit()} className="btn btn-primary">
            <strong>{toggledUnit}</strong> {icon}
        </button>
    </div>)
}

export default ToggleButton