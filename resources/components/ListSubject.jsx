import React,{useState} from "react";
import Subject from "./UI/Subject";

const ListSubject = ({subjects}) => {
    if(!subjects.length){
        console.log(2);
        return  <div className="error">Предметы не найдены</div>
    }

    return(
        <ul className="table-subjects">
            {
                subjects.map((e,i) =><Subject name={e} key={i}/>)
            }
        </ul>
    )
}

export default ListSubject