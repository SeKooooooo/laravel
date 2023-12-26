import React from "react";
import {Link} from 'react-router-dom'

const Test = ({id,topic,teacher}) => {
    const title = `Тема: ${topic}, Преподаватель: ${teacher} `
    const clickTest=() =>{
        localStorage.setItem('test', id)
    }

    return (
        <li onClick={clickTest}>
            <Link  className="tests-item" to="/subject_map/tests/test">{title}</Link>
        </li>
    )
}

export default Test