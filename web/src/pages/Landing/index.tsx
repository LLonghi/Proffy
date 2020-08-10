import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";
import api from '../../services/api';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {

        api.get('/connections').then(response => {
            const { total } = response.data

            setTotalConnections(total);
        })

    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

            </div>
            <div id="page-landing-action-bar">


                <div className="buttons-container">
                    <span className="total-connections">
                        Seja bem-vindo,
                        <br />
                        <strong>O que deseja fazer?</strong>
                    </span>

                    <span className="total-connections">
                        Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="" />
                    </span>

                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="/give-class" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aula" />
                        Dar Aula
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;