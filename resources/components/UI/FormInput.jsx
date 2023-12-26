import React from "react";

const FormInput = () => {

    return (
        <div>
            {(email.isDirty && email.isEmpty) && <div className="input-error">{email.infoError.isEmpty}</div>}
            {(email.isDirty && email.isEmail) && <div className="input-error">{email.infoError.isEmail}</div>}
            <input  onChange={e=> email.onChange(e)} 
                onBlur={e=> email.onBlur(e)} 
                value={email.value} type="email" 
                placeholder="Почта" className="input input-email"/>
        </div>
    )
}