import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    transition: all 1s ease;
    background-image: ${props => props.theme.colors.mode ? `url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/job191-kwan-01a.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=1113053087ea5e77b9c0138f2934d65c')` : `url('https://wallpapercave.com/wp/SIkIzca.jpg')`};
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
        color: ${props => props.theme.colors.subText};
    }   
    h2 {
        font-size: 3rem;
        color: #5c6274;
        strong {
            color: #6d5bf5;
        }
    }
    h3 {
        font-size: 2em;
    }
`;

