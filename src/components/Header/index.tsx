import * as Accordion from '@radix-ui/react-accordion'
import React from "react";
import { Content, HeaderAcc, HeaderRoot, Item, Trigger } from './styles';

export function Header(){ 
    return(
                <HeaderRoot type="single" collapsible orientation='vertical'>
                <Item value="item-1">                               
                    <Content>
                        <p>Primeiro, você precisará aplicar um pouco de CSS 
                        para alterar a posição do conteúdo quando o Accordion for expandido.</p>
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