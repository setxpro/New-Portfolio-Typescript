import styled from 'styled-components';

export const Container = styled.div`

        form {
            width: 100%;
            margin-top: 1rem/* 16px */;
            margin-bottom: 1rem/* 16px */;

            textarea {
                width: 100%;
                min-width: 304px;
                min-height: 112px;
                font-size: 0.875rem/* 14px */;
                line-height: 1.25rem/* 20px */;
                color: rgba(161, 161, 170, 1);
                border-color: rgba(82, 82, 91, 1);
                border-radius: 4px;
                background-color: transparent;
                resize: none;
                padding: .5rem;

                &:focus {
                    border-color: rgba(130, 87, 230, 1);
                    outline: none;
                    
                    ::-webkit-scrollbar { width: 3px; }
                    ::-webkit-scrollbar-thumb { background: #3f3f46; }
                    ::-webkit-scrollbar-track {background: transparent;}
                }
            }

            footer {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                margin-top: 1rem;
            }
        }
`;

export const ButtonGoBack = styled.button`
    background: transparent;
    border: none;
    position: absolute;
    top: 5px;
    left: 0px;
        
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export const ContentHeader = styled.div`
    font-size: 1.25rem/* 20px */;
    line-height: 1.75rem/* 28px */;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    img {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export const SendFeedbackButton = styled.button`
    width: 100%;
    padding: 1rem;
    background-color: rgba(130, 87, 230, 1);
    border-radius: 4px;
    border-color: transparent;

    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    align-items: center;

    font-size: 0.875rem;
    line-height: 1.25rem;

    color: #EFEF;
    cursor: pointer;

    &:hover {
        background: rgba(153, 109, 255, 1) 
    }
    &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
    }

    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:disabled {
        opacity: 0.5;
        background-color: rgba(130, 87, 230,1);
        color: #EDE88888;
    }
`;