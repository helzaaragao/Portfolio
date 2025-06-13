import * as Accordion from '@radix-ui/react-accordion'
import React from "react";
import { Content, HeaderAcc, HeaderRoot, Item, Trigger } from './styles';

export function Header(){ 
    return(
                <HeaderRoot type="single" collapsible orientation='vertical'>
                <Item value="item-1">                               
                    <Content>
                        <div>
                            <span>Tempo de resposta em até 2 dias</span>
                             <h3>Me contrate para sua equipe!</h3>
                            <p>Disponível</p>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/helzaaragao/' target='_blank' rel='noopener noreferrer'>
                              <h3>helzaaragao</h3>
                              <p>Mande mensagem direto para o meu Linkedin</p> 
                            </a>
                        </div>

                        <aside >

                        </aside>
                      
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