import React, { Children } from "react";
import "../../../css/ModalSearchSubject.scss"

const ModalSearchSubject = ({children}) => {

    return(
        <div className="modal ">
            <div className="modal-content">
                {children}
            </div>
        </div>
    )
}

export default ModalSearchSubject