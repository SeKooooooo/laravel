import React from "react";
import TestForm from "./TestForm";

const ItemTest = ({itemTest}) =>{

    return(
        <div className="item-test">
            <div className="task">
                <p className="task-question">{itemTest.question}</p>
                <TestForm answers={itemTest.answers} id={itemTest.id}/>
            </div>
            <div className="timer">
                У вас осталось: 2 минуты 30 секунд
            </div>
        </div>
    )
}

export default ItemTest