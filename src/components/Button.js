import React, {useState} from "react";
import "./Button.css"

export default function Button(props) {

    const [buttonWidth, setButtonWidth] = useState(props.width);
    const [buttonHeight, setButtonHeight] = useState(props.height);
    const [textSize, setTextSize] = useState(100);

    function handleMouseEnter() {
        setButtonWidth(props.width * 0.9);
        setButtonHeight(props.height * 0.9);
        setTextSize(90);
    }

    function handleMouseLeave() {
        setButtonWidth(props.width);
        setButtonHeight(props.height);
        setTextSize(100);
    }


    return(
        <button
            className="generic-button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                width: `${buttonWidth}rem`,
                height: `${buttonHeight}rem`,
                fontSize: `${textSize}%`
            }}
        >
            {props.value}
        </button>
    );
}
