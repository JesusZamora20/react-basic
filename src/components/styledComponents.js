import React from 'react';
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from 'styled-components';
// css es para escribir css dentro de los template literals
// keyframes es para animaciones
//theme provider es para definir temas en la pagina
// createglobalstyle permite crear estilos glbales para toda la aplicacion

function StyledComponents(){

    let mainColor = '#db7093';
    let mainColor80 = '#db709380';

    const setTransitionTime = (time) => `all ${time} ease-in-out`;
    const fadeIn = keyframes`
        0%{
            opacity: 0;
        }

        100%{
            opacity: 1;
        }
    `;

    const MyH4 = styled.h4`
        padding: 2rem;
        text-align: center;
        color:${(props) => props.color};
        color:${({color}) => color || '#000'};
        background-color:  ${mainColor};
        transition: ${setTransitionTime('.5s')};
        animation: ${fadeIn} 3s ease-out;
        
        ${(props) => props.isButton && css`
            margin: auto;
            max-width: 50%;
            border-radius: .25rem;
            cursor: pointer;
        `}

        &:hover{
            background-color: ${mainColor80};
        }
    `;

    const light = {
        color: '#222',
        bgColor: '#DDD'
    };

    const dark = {
        color: '#DDD',
        bgColor: '#222'
    }


    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color: ${({theme}) => theme.color};
        background-color: ${({theme}) => theme.bgColor};
    `;

    // hereda del componente Box
    const BoxRounded = styled(Box)`
        border-radius: 1rem;
    `;

    const GlobalStyle = createGlobalStyle`
        h3{
            background-color: #61fbda;
            color: #000;
        }
    `;
    return(
        <>
        <GlobalStyle />
            <h3>Styled-Components</h3>
            <MyH4>Hi im an h4 styled with styled-components</MyH4>
            <MyH4 color='#61fbda'>Hi im an h4 styled with styled-components</MyH4>
            <MyH4 color='#61fbda' isButton>Hi im an h4 styled with styled-components and made button</MyH4>
            <ThemeProvider theme={light}>
                <Box>I'm a light Box</Box>
                <BoxRounded>I'm a light Box Rounded</BoxRounded>
            </ThemeProvider>

            <ThemeProvider theme={dark}>
                <Box>I'm a dark Box</Box>
                <BoxRounded>I'm a dark Box Rounded</BoxRounded>
            </ThemeProvider>
        </>
    );
}

export default StyledComponents;