import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number,
    user_id: number,
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string,
    subject: string,
    cost: number
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }) => {

    function novaConexao() {

        api.post('connections', {
            user_id: teacher.user_id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="Leo Longhi" />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>Preço/hora
                <strong>R$ {teacher.cost}</strong>
                </p>
                <a
                    href={`https://wa.me/${teacher.whatsapp}`}
                    target="_blank"
                    onClick={novaConexao}
                >
                    <img src={whatsAppIcon} alt="WhatsApp" />
                    Entrar em Contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;