import * as Accordion from '@radix-ui/react-accordion'
import React, { useState } from "react";
import { Content, FormContainer, HeaderAcc, HeaderRoot, Item, Trigger } from './styles';
import { ArrowLeftIcon, CalendarCheckIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import emailjs from '@emailjs/browser';

interface FormData {
    name: string, 
    email: string, 
    userMessage: string
}

const emailjsConfig = {
    serviceId: import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID || '', 
    templateId: import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID_ADMIN || '',
    admId: import.meta.env.VITE_PUBLIC_EMAILJS_USER_ID || ''
}

export function Header(){ 
    const [showForm, setShowForm] = useState(false);
    const [message, setMessage] = useState('');

    const handleContactClick = () => {
        setShowForm(true)
    }
    const handleBackClick = () => {
        setShowForm(false)
        setMessage('')
    }
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log('Mensagem enviada:', message)
        alert('Mensagem enviada com sucesso!')
        handleBackClick()
    }
    return(
                <HeaderRoot type="single" collapsible orientation='vertical'>
                <Item value="item-1">                               
                    <Content>
                        {showForm ? (
                            <FormContainer>
                                <aside >
                                   <a onClick={handleBackClick}><ArrowLeftIcon size={16} />Voltar</a> 
                                    <p>O e-mail que você estará mandando mensagem é exclusivamente para e-mails profissionais(helzaragao@gmail.com), qualquer outro tópico mande pelo Linkedin!</p>
                                </aside>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name">Nome</label>
                                        <input type="text" id='name' name='name' />
                                    </div>
                                    <div>
                                        <label htmlFor="email">E-mail</label>
                                        <input type="email" id='email' name='email' />
                                    </div>
                                    <div>
                                        <label htmlFor="userMessage">Mensagem</label>
                                        <textarea name="userMessage" id="userMessage"></textarea>
                                    </div>  
                                    
                                </form> 
                            </FormContainer>
                        
                        ): (
                            <main>
                                <div onClick={handleContactClick}>
                                    <span><CalendarCheckIcon size={16} /> Tempo de resposta em até 2 dias</span>
                                    <h3>Me contrate para sua equipe!</h3>
                                    <p>Disponível</p>
                                </div>
                                <div>
                                    <a href='https://www.linkedin.com/in/helzaaragao/' target='_blank' rel='noopener noreferrer'>
                                    <h3><LinkedinLogoIcon size={32} />helzaaragao</h3>
                                    <p>Mande mensagem direto para o meu Linkedin</p> 
                                    </a>
                                </div>      
                          </main>
                        )}
                      
                    </Content>
                    <HeaderAcc>
                        <p>Helza</p>
                        <Trigger>
                            <p>Contato</p>
                        </Trigger>
                    </HeaderAcc>
                   
                </Item>
            </HeaderRoot>
    )
}