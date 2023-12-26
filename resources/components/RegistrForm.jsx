import React from "react";
import { useInput } from "../hooks/useInput";

const RegistrForm = () => {

    const email = useInput('',{'isEmpty': true, 'isEmail':false})
    const password = useInput('',{'isEmpty': true, 'minLength': 8})
    const name = useInput('',{'isEmpty': true})
    const school = useInput('',{'isEmpty': true})
    const date = useInput('',{'isEmpty': true,'isDate':false})

    return (
        <form className="registration-form">
            <div className="table-input">
                <div className="container-input">
                    {(email.isDirty && email.isEmpty) && <div className="input-error">{email.infoError.isEmpty}</div>}
                    {(email.isDirty && email.isEmail) && <div className="input-error">{email.infoError.isEmail}</div>}
                    <input  onChange={e=> email.onChange(e)} 
                        onBlur={e=> email.onBlur(e)} 
                        value={email.value} type="email" 
                        placeholder="Почта" className="input input-email"/>
                </div>
                <div className="container-input">
                    {(date.isDirty && date.isEmpty) && <div className="input-error">{date.infoError.isEmpty}</div>}
                    {(date.isDirty && date.isDate) && <div className="input-error">{date.infoError.isDate}</div>}
                    {console.log(date.isEmail)}
                    <input onChange={e=> date.onChange(e)} 
                        onBlur={e=> date.onBlur(e)} 
                        value={date.value} type="date" 
                        placeholder="Дата рождения" className="input input-date"/>
                </div>
                <div className="container-input">
                    {(password.isDirty && password.isEmpty) && <div className="input-error">{password.infoError.isEmpty}</div>}
                    {(password.isDirty && password.minLength) && <div className="input-error">{password.infoError.minLengthError}</div>}
                    <input onChange={e=> password.onChange(e)} 
                        onBlur={e=> password.onBlur(e)} 
                        value={password.value} type="password" 
                        placeholder="Пароль" className="input input-pass"/>
                </div>
                <div className="container-input">
                    {(name.isDirty && name.isEmpty) && <div className="input-error">{name.infoError.isEmpty}</div>}
                    <input onChange={e=> name.onChange(e)} 
                        onBlur={e=> name.onBlur(e)} 
                        value={name.value} type="text" 
                        placeholder="ФИО" className="input input-name"/>
                </div>
                <div className="container-input">
                    {(school.isDirty && school.isEmpty) && <div className="input-error">{school.infoError.isEmpty}</div>}
                    <input onChange={e=> school.onChange(e)} 
                        onBlur={e=> school.onBlur(e)} 
                        value={school.value} type="text" 
                        placeholder="Образовательное учреждение" className="input input-school"/>
                </div>
                <div className="choice-role">
                    <label className ="role" for="student">
                        <span >Я ученик</span>
                        <input type="radio" name="role" value="student" id="student"/>
                    </label>
                    <label className ="role" for="teacher">
                        <span >Я учитель</span>
                        <input type="radio" name="role" value="teacher" id="teacher"/>
                    </label>
                </div>                      
                <button disabled={!email.inputValid || !password.inputValid || !name.inputValid || !date.inputValid || !school.inputValid} 
                className="btn-registration" type="submit">Зарегистрироваться</button>
            </div>
        </form>
) 
}

export default RegistrForm