import React from "react";
import './HelloPage.scss'
import '../../css/reset.css'
import {Link, useLocation} from 'react-router-dom'
import Header from "../../components/Header";
import Title from "../../components/UI/Title";


const HelloPage = () => {
    const location = useLocation()

    return(
        <div>   
            <Header/>
            <main className="hello-main">
                <div className="container-main">
                    <div className="main-body">
                        <section className="body-info">
                            <Title name="Взаимодействие с тестами ещё не было настолько простым!"/>
                            <p className="body-text">
                                TheThinkers - бесплатный конструктор тестов с 
                                карточками, с помощью которого ваши ученики
                                смогут решать задачи с вариантами ответов.
                            </p>
                            <Link  className="btn-registration" to="/registr">Регистрация</Link>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HelloPage