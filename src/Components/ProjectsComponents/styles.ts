import styled from 'styled-components';

export const Container = styled.div`

    width: 355px;
    height: 310px;
    background: ${props => props.theme.colors.cards};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    gap: 1rem;
    border-radius: 1rem;
    overflow: hidden;

    img {

        width: 350px;
        height: 150px;
        border-radius: 1rem;
        cursor: pointer;

            &:hover {
                animation: kenburns-top 5s ease-out both;
                @keyframes kenburns-top {
                    0% {
                        transform: scale(1) translateY(0);
                        transform-origin: 50% 16%;
                    }
                    100% {
                        transform: scale(1.25) translateY(-15px);
                        transform-origin: top;
                    }
                }
            }
    }

    h2 {
        text-align: center;
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    h4 {
        text-align: center;
        color: ${props => props.theme.colors.icons};
    }

    p {
        text-align: center;
        width: 98%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    a {

        text-decoration: none;

        button {
            padding: 8px 15px;
            border-radius: .7rem;
            border: 1px solid ${props => props.theme.colors.icons};;
            background: transparent;
            color: ${props => props.theme.colors.icons};
            cursor: pointer;
        }
    }
`;
