import React from "react";

const ButtonTask = ({num}) => {
    return(
        <button className="tasks-item">{num+1}</button>
    )
}

export default ButtonTask