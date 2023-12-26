import React from "react";

const TestInfoItem = ({keys, value}) => {
     return(
        <li className="info-item">
            <span className="item-key">{keys}</span>
            <span className="item-value">{value}</span>
        </li>
     )
}

export default TestInfoItem