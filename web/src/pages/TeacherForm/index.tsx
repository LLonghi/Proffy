import React, { useState } from 'react'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';

function TeacherForm() {
    const [scheduleItems, setScheduleItem] = useState([
        { week_day: 0, from: '09:00', to: '12:00' },
        { week_day: 1, from: '08:00', to: '12:00' },
        { week_day: 1, from: '13:00', to: '18:00' },
        { week_day: 2, from: '14:00', to: '19:00' },
    ])

    function addNewScheduleItem() {
        setScheduleItem([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }]
        )
    };

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel que você quer dar aulas!"
                description="O primeiro passo é preencher este formulario de inscrição" />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <TextArea name="bio" label="Biografia" />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                        name="subject"
                        label="Materia"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciencies', label: 'Ciencies' },
                            { value: 'Educação fisica', label: 'Educação fisica' },
                            { value: 'Fisica', label: 'Fisica' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Historia', label: 'Historia' },
                            { value: 'Portugues', label: 'Portugues' },
                            { value: 'Quimica', label: 'Quimica' }
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponiveis
                    <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                    </legend>

                    {scheduleItems.map(scheduleItem => (
                        <div key={scheduleItem.week_day} className="schedule-item">
                            <Select
                                name="week_day"
                                label="Dia da semana"
                                options={[
                                    { value: '0', label: 'Domingo' },
                                    { value: '1', label: 'Segunda-feira' },
                                    { value: '2', label: 'Terça-feira' },
                                    { value: '3', label: 'Quarta-feira' },
                                    { value: '4', label: 'Quinta-feira' },
                                    { value: '5', label: 'Sexta-feira' },
                                    { value: '6', label: 'Sabado' }
                                ]}
                                value={scheduleItem.week_day}
                            />
                            <Input name="from" label="Das" type="time" value={scheduleItem.from} />
                            <Input name="to" label="Até" type="time" value={scheduleItem.to} />
                        </div>
                    ))}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;