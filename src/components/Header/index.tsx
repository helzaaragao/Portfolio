import * as Accordion from '@radix-ui/react-accordion'
import React, { useState } from "react";
import { Content, FormContainer, HeaderAcc, HeaderRoot, Item, Trigger } from './styles';
import { ArrowLeftIcon, CalendarCheckIcon, ChatCenteredDotsIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
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
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        name:'',
        email:'',
        userMessage:''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState('')
    const [isEmailSent, setIsEmailSent] = useState(false)

   

    const handleContactClick = () => {
        setShowForm(true)
        setIsEmailSent(false)
        setFormData({name:'', email:'', userMessage:''})

    }
    const handleBackClick = () => {
        setShowForm(false)
        setIsEmailSent(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev, 
            [name]: value
        }))
        if(submitError){
            setSubmitError('')
    }
    }

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting || isEmailSent) return;
        setIsSubmitting(true)
        setSubmitError('')
        try{
            await emailjs.send(
                emailjsConfig.serviceId, 
                emailjsConfig.templateId,
                {
                    ...formData,
                    to_email: 'helzaragao@gmail.com',
                    subject: `Portfólio: Mensagem de ${formData.name}`
                },
                emailjsConfig.admId
            )
            setIsEmailSent(true)  
        } catch(error){
            console.error('Erro ao enviar e-mail:', error)
            setSubmitError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente')
            setIsEmailSent(false)
        } finally{
            setIsSubmitting(false)
        }
    }
    
    return(
        <HeaderRoot type="single" collapsible orientation='vertical'>
            <Item value="item-1">                               
                    <Content>
                        {showForm ? (
                            <FormContainer>
                                {isEmailSent? (
                                    <aside>
                                          <a onClick={handleBackClick}><ArrowLeftIcon size={16} />Voltar</a> 
                                          <span>MENSAGEM ENVIADA
                                               <ChatCenteredDotsIcon size={20}  weight='bold'  /></span>
                                          <p>Obrigada por entrar em contato! Responderei em breve sua mensagem.</p>
                                    </aside>
                
                                ) : (
                                    <>
                                      <aside >
                                   <a onClick={handleBackClick}><ArrowLeftIcon size={16} />Voltar</a> 
                                    <p>O e-mail que você estará mandando mensagem é exclusivamente para e-mails profissionais(helzaragao@gmail.com), qualquer outro tópico mande pelo Linkedin!</p>
                                </aside>
                                  <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name">Nome</label>
                                        <input type="text" id='name' name='name' 
                                        value={formData.name} onChange={handleChange} 
                                        disabled={isSubmitting} required/>
                                    </div>
                                    <div>
                                        <label htmlFor="email">E-mail</label>
                                        <input type="email" id='email' name='email' 
                                        value={formData.email} onChange={handleChange} 
                                        disabled={isSubmitting} required />
                                    </div>
                                    <div>
                                        <label htmlFor="userMessage">Mensagem</label>
                                        <textarea name="userMessage" id="userMessage" 
                                        value={formData.userMessage} onChange={handleChange} 
                                        disabled={isSubmitting} required></textarea>
                                    </div>  
                                    <button type='submit' disabled={isSubmitting || isEmailSent}>
                                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                                    </button>
                                    {submitError && <p>{submitError}</p>}
                                </form> 
                                </>
                                )}
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