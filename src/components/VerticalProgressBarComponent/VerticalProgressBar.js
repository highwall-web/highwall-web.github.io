import React from 'react'
import "./VerticalProgressBar.css"

const VerticalProgressBar = ({progress = "75"}) => {
    return (
        <div className={"progress-background"}>
            <div className={"progress-bar"} style={{
                height: `${progress}%`
            }}></div>
        </div>
    )
}
export default VerticalProgressBar
