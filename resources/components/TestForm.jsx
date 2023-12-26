import React from "react";
import Answer from "./UI/Answer";

const TestForm = ({answers,id}) =>{
    return(
        <form>
            <ul className="list-answer">
                {
                    answers.map((e,i) => <Answer key={i} text={e} index={i} id={id}/> )
                }
            </ul>
        </form>
    )
}

export default TestForm