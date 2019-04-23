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


    .back_text {
        font-size: 53px;
        opacity: .1;
        font-family: MainFontUltralight;
        text-transform: uppercase;
    }

    .front_text {
        font-size: 26px;
        position: absolute;
        font-family: MainFontThin;
        text-transform: uppercase;
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

