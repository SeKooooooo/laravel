import React from "react";
import Test from "./UI/Test";

const ListTest = ({tests}) => {
    console.log(tests);
    return (
        <ul className="list-tests">
            {
                tests.map(e => <Test key={e.id} topic={e.topic} teacher={e.teacher} id={e.id}/>)
            }
        </ul>
    )
}

export default ListTest