import React from "react";

const TestTasks = ({test,change,curnum}) => {

    return (
        <div className="tasks">
            <div className="list-tasks">
                {
                    test.map((e,i)=><button key={i} onClick={()=> change(i+1)} className={i+1===curnum? "tasks-item active": "tasks-item"}>{i+1}</button>)
                }
            </div>
        </div>
    )
}

export default TestTasks