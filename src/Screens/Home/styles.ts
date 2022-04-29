import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-image: url('https://wallpapercave.com/wp/SIkIzca.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentLeft = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 7em;
    }   
    h2 {
        font-size: 3rem;

        strong {
            color: #6d5bf5;
        }
    }
    h3 {
        font-size: 2em;
    }
`;

export const ContentRight = styled.div`

`;

