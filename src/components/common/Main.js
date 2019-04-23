import React from 'react';
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`;
const MainIn = styled.div`
  width: 100%; 
`;



export const Main = props => {

    const { children } = props;

    return (

        <Wrapper>
            <MainIn>
                {children}
            </MainIn>
        </Wrapper>

    );

};

