import React from "react";
import {Link} from 'react-router-dom'

const Subject = ({name}) => {

    const clickSubject=() =>{
        localStorage.setItem('name', name)
    }

    return (
        <li onClick={clickSubject}>
            <Link className="item-subjects" to="/subject_map/tests">{name}</Link>
        </li>
    )
}

export default Subject