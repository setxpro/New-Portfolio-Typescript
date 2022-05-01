import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 200px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border: 1px dashed ${props => props.theme.colors.border};

    @media (max-width: 810px) {
        width: 220px;
        height: 200px;
    }

    @media (max-width: 610px) {
        width: 250px;
    }

    @media (max-width: 543px) {
        width: 220px;
        height: 200px;
    }
    @media (max-width: 490px) {
        width: 420px;

        p {
            text-align: center;
        }
    }

    @media (max-width: 424px) {
        margin: auto;
        width: 390px;
    }
    @media (max-width: 394px) {
        margin: auto;
        width: 350px;
    }

    h2 {
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 19px;
        text-align: center;
    }

    p {
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        & + p {
            text-align: center;
            color: ${props => props.theme.colors.subText};
        }
    }

   

    a {
        text-decoration: none;
        button {
        padding: 8px 20px;
        background: transparent;
        border: 1px solid ${props => props.theme.colors.border};
        color: ${props => props.theme.colors.border};
        border-radius: 8px;
        cursor: pointer;

        transition: all .5s ease;

        &:hover {
            background: ${props => props.theme.colors.border};
            color: #000;
        }
    }
    }
`;
