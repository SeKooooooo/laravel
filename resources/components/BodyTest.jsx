import React, { useState } from "react";
import '../css/BodyTest.scss'
import ItemTest from "./ItemTest";
import TestTasks from "./TestTasks";

const BodyTest = () => {

    const [numItemTest, setNumItemTest] = useState(1)
    const test = [
        {
            id:1,
            question:"Какая самая высокая гора в мире?",
            answers:["Эверест","Эльбрус","Арарат","Олимп"]
        },
        {
            id:2,
            question:"Кто он",
            answers:["Lasdff","adadas","aasdfasd","ssdfsd"]
        },
        {   
            id:3,
            question:"Кто она",
            answers:["Lasdff","dfasdffs","asdasd","dsf"]
        },
        {
            id:4,
            question:"Кто мы",
            answers:["Lasdff","adadas","asdasd","sadasd"]
        }
    ]

    const ChangeNum=(num)=>{
        setNumItemTest(num)
    }

    return(
        <main className="test-main">
            <div className="container-main container-main__test">
                <div className="main-body">
                    <ItemTest itemTest={test[numItemTest-1]}/>
                </div>
            </div>
            <TestTasks test={test} change={ChangeNum} curnum={numItemTest}/>
        </main>
    )
}

export default BodyTest