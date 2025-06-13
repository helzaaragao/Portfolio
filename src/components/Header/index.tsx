import * as Accordion from '@radix-ui/react-accordion'
import React, { useState } from "react";
import { Content, HeaderAcc, HeaderRoot, Item, Trigger } from './styles';
import { CalendarCheckIcon, LinkedinLogoIcon } from '@phosphor-icons/react';

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
                            <div>
                                <div onClick={handleBackClick}>
                                    Voltar
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <p>O E-mail que você estará mandando mensagem é exclusivamente para e-mails profissionais(helzaragao@gmail.com), qualquer outro tópico mande pelo Linkedin! </p>
                                    </div>
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
                            </div>
                        
                        ): (
                            <main onClick={handleContactClick}>
                             <div>
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
// https://www.radix-ui.com/primitives/docs/components/accordion
    )
}