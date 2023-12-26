import React,{useState,useMemo} from "react";
import Header from "../../components/Header";
import Title from "../../components/UI/Title";
import ListTest from "../../components/ListTest";
import { ChangeEnding } from "../../utils/ChangeEnding";
import Main from "../../components/UI/Main";
import Input from "../../components/UI/Input";
import "./TestsPage.scss"


const TestsPage = () => {
    const name = `Тесты по ${ChangeEnding(localStorage.getItem('name'))}`
    const [tests, setTests] = useState([
        {   
            id:1,
            topic:'Начало тригонометрии',
            teacher:'А.С. Пушкин'
        },
        {   
            id:2,
            topic:'Начало алгебры',
            teacher:'О.Д. Канышев'
        }
    ])
    const [searchQuery, setSearchQuery] = useState('')

    const searchTest = useMemo(() =>{
        if(searchQuery){
            return tests.filter(test => test.topic.toLowerCase().includes(searchQuery.toLowerCase()) || test.teacher.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        return tests
    },[searchQuery,tests]) 
    
    return(
        <div>
        <Header/>
        <Main name="tests">  
            <Title name={name}/>
            <Input
                type="text"
                placeholder="Найти нужный тест..."
                onChange={e => setSearchQuery(e.target.value)}
                value = {searchQuery}
            />
            <div className="tests">
                <ListTest tests={searchTest}/>
            </div>
        </Main>
        </div>
    )
}

export default TestsPage