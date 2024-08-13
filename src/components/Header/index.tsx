import * as Accordion from '@radix-ui/react-accordion'
import React from "react";
import { Content, HeaderRoot, Item } from './styles';

export function Header(){ 
    return(
                <HeaderRoot type="single" collapsible orientation='vertical'>
                <Item value="item-1">                       
                    <Accordion.Trigger>
                        <h2>Helza</h2>
                    </Accordion.Trigger>
                    <Content>
                        <p>Primeiro, você precisará aplicar um pouco de CSS 
                        para alterar a posição do conteúdo quando o Accordion for expandido.</p>
                    </Content>
                </Item>
            </HeaderRoot>
// https://www.radix-ui.com/primitives/docs/components/accordion
    )
}