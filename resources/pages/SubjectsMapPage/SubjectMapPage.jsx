import React,{useState,useMemo} from "react";
import Header from "../../components/Header";
import "./SubjectMapPage.scss"
import ListSubject from "../../components/ListSubject";
import Title from "../../components/UI/Title";
import Main from "../../components/UI/Main";
import Input from "../../components/UI/Input";

const SubjectMapPage = () =>{
    const [subjects,setSubjects] =useState([
        'Математика','Физика','Информатика',
        'Английский язык','Русский язык'
    ])

    const [searchQuery, setSearchQuery] = useState('')

    const searchSubj = useMemo(() =>{
        if(searchQuery){
            return subjects.filter(subject => subject.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        return subjects
    },[searchQuery,subjects]) 

    return (
        <div>
            <Header/>
            <Main name = 'subject'>
                <Title name='Выбери предмет:'/>
                <Input
                    type="text"
                    placeholder="Найти нужный предмет..."
                    onChange={e => setSearchQuery(e.target.value)}
                    value = {searchQuery}
                />
                <ListSubject subjects={searchSubj}/>
            </Main>
        </div>
    )
}

export default SubjectMapPage