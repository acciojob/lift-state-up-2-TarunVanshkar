import React from "react";

const Child = (props) => {
    return(
        <div>
            <h1>Child Component</h1>
            <input type="text" value={props.inputValue} onChange={props.handleInput} />
        </div>
    )
}

export default Child;