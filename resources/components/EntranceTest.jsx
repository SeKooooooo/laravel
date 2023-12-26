import React from "react";
import Title from "./UI/Title";
import TestInfoItem from "./TestInfoItem";

const EntranceTest = ({change}) => {
    const name = localStorage.getItem('name')

    return(
        <main className="entrance-test-main">
            <div className="container-main">
                <div className="main-body">
                    <Title nameName="Начало тригонометрии"/>
                    <ul className="test-info">
                        <TestInfoItem keys={'Предмет:'} value={name}/>
                        <TestInfoItem keys={'Автор:'} value={"Головач Е. М."}/>
                        <TestInfoItem keys={'Время на прохождение:'} value={"15 мин."}/>
                        <TestInfoItem keys={'Кол-во вопросов:'} value={10}/>
                        <button onClick={() => change()} className="go-test">Приступить к выполнению</button>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default EntranceTest