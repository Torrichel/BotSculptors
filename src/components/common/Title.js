import React from 'react';

import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.marginTop}px;
    margin-bottom: ${props => props.marginBottom  || 45}px;
    width: 100%;
    height: 50px;
    white-space: nowrap;
    font-family: "Open Sans";
    
    
    
    


    .back_text {
        opacity: .1;
        font-family: inherit;
        text-transform: uppercase;
        color: #7d8794;
        font-size: 60px;
        font-weight: 400;
        line-height: 106.42px;
        
        ${({theme}) => theme.mobile`
            font-size: 45px;
        `}

        
    }

    .front_text {

        position: absolute;
        font-family: inherit;
        text-transform: uppercase;
        
        color: #0d0d0d;

        font-size: 30px;
        font-weight: 400;
        line-height: 48px;
        
        ${({theme}) => theme.mobile`
            font-size: 22.5px;
        `}
        
        
    }

`;


export const Title = props => {

    const { frontText='', backText='', id='', marginTop, marginBottom } = props;


    return (

        <Wrapper marginTop={marginTop} marginBottom={marginBottom} id={id}>
            <div className="back_text">{backText}</div>
            <div className="front_text">{frontText}</div>
        </Wrapper>

    );

};

