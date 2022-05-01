import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-image: ${props => props.theme.colors.mode ? `url('https://i.pinimg.com/originals/9d/70/8c/9d708c751faa3e32d7c8d674b94cbce5.jpg')` : `url('https://wallpapercave.com/wp/SIkIzca.jpg')`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
