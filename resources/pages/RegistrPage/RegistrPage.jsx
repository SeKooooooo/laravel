import React from "react";
import './RegistrPage.scss'
import Header from "../../components/Header";
import RegistrForm from "../../components/RegistrForm";
import Title from "../../components/UI/Title";

const RegistrPage = () => {
    return (
        <div>
            <Header/>
            <main className="registration-main">
                <div className="container-main">
                    <div className="main-body">
                        <Title name="Регистрация"/>
                        <RegistrForm/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default RegistrPage