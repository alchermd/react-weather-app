import React from 'react'

const FrontDisplay = ({requestReport}) =>
    (<div>
        <button className="btn btn-warning btn-lg" 
            onClick={() => requestReport()}>Get Weather Report</button>
        <p><em>NOTE: Allow the app to access your location.</em></p>
    </div>)

export default FrontDisplay