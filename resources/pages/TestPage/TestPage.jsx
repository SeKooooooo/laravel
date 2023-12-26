import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import './TestPage.scss'
import BodyTest from "../../components/BodyTest";
import EntranceTest from "../../components/EntranceTest";

const TestPage = () => {
    const [testBody, setTestBody] = useState(false)
    const testId= localStorage.getItem('test')
    
    const ChangeFilling = () => {
        setTestBody(true)
    }
 
    const [bodyPage, setBodyPage] = useState(<EntranceTest change={ChangeFilling}/>)
    
    useEffect(()=>{
        testBody ? setBodyPage(<BodyTest/>) : setBodyPage(<EntranceTest change={ChangeFilling}/>)
    },[testBody])

    return(
        <>
            <Header/>
            {bodyPage}
        </>
    )
}

export default TestPage