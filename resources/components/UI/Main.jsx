import React from "react";

const Main = ({name,children}) => {
    const nameClass=`${name}-main`

    return (
        <main className={nameClass}>
            <div className="container-main">
                <div className="main-body">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Main