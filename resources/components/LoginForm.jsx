import React from "react";
import { useInput } from "../hooks/useInput";
import { Link } from "react-router-dom";

const LoginForm = () => {

    const email = useInput('',{'isEmpty': true, 'isEmail':false})
    const password = useInput('',{'isEmpty': true, 'minLength': 8})

    return(
        <form>
            <div className="column-input">
                {(email.isDirty && email.isEmpty) && <div>{email.infoError.isEmpty}</div>}
                {(email.isDirty && email.isEmail) && <div>{email.infoError.isEmail}</div>}

                <input 
                    onChange={e=> email.onChange(e)} 
                    onBlur={e=> email.onBlur(e)} 
                    value={email.value} type="email"
                    name="email" placeholder="Почта" className="input"
                />
                {(password.isDirty && password.isEmpty) && <div>{password.infoError.isEmpty}</div>}
                {(password.isDirty && password.minLength) && <div>{password.infoError.minLengthError}</div>}
                <input 
                    onChange={e=> password.onChange(e)} 
                    onBlur={e=> password.onBlur(e)} 
                    value={password.value} type='password' 
                    name="password" placeholder="Пароль" className="input input-last"
                />
                <a href="#" className="no-pass">Забыли пароль?</a>
                <button disabled={!email.inputValid || !password.inputValid} className="btn-login" type="submit"><Link to='/subject_map'>Войти</Link></button>
            </div>
        </form>
    )
}

export default LoginForm