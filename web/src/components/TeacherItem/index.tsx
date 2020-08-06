import React from 'react'

import PageHeader from '../../components/PageHeader';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/1265077578320281606/AH4XhkKX_400x400.jpg" alt="Leo Longhi" />
                <div>
                    <strong>Leo Longhi</strong>
                    <span>Fisica</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de fisica avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
        </p>

            <footer>
                <p>Preço/hora
            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="WhatsApp" />
                Entrar em Contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem;