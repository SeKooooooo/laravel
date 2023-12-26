import React from "react";
import './LoginPage.scss'
import LoginForm from "../../components/LoginForm";
import Header from "../../components/Header";
import Title from "../../components/UI/Title";

const LoginPage = () => {
    return (
        <div>
            <Header/>
            <main className="login-main">
                <div className="container-main">
                    <div className="main-body">
                        <Title name="Вход"/>
                        <LoginForm/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default LoginPage