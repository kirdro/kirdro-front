import React, { useState,memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { useGlobal } from 'reactn';

const DivBoxButton = styled.div`
color: ${props => props.isPressed ? '#ffffff' : '#8d8d8d'};
transition: color .5s;
`

const ButtonManu = memo(() => {

    const [isPressed, onClick] = useGlobal('isPressedButtonMenu');
    const cliked = (e) => {
        onClick(!isPressed)
    }
    return (
        <DivBoxButton onClick={cliked} isPressed={isPressed} className={'iconItem'}>
            <FontAwesomeIcon icon={faBars} size={'2x'} />
        </DivBoxButton>
    );
});

export default ButtonManu;
