import styled from 'styled-components';

import { FaReact } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';



export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
export const ContentLeft = styled.div`
    width: 50%;
    height: 550px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
      text-align: center;
    }

    p {
      font-size: 1.3rem;
    }
`;
export const Buttons = styled.div`
   display: flex;
   gap: 2rem;
   align-items: center;
   justify-content: center;
   width: 100%;
   margin-top: 2rem;
   
    > button {
      padding: 8px 15px;
      border: 1px solid ${props => props.theme.colors.border};
      color:  ${props => props.theme.colors.buttheme};
      background: transparent;
      border-radius: 8px;
      cursor: pointer;
      transition: all 1s ease;
      &:hover {
        background: ${props => props.theme.colors.icons};
        color: ${props => props.theme.colors.buttheme};
      }
    }
`;

export const ReactIcon = styled(FaReact)`
  font-size: 12rem;
  color: ${props => props.theme.colors.icons};
  animation: rt 4s linear infinite;

  @keyframes rt {
      0% {
        transform: rotate(360deg);
      }
  }
`;

export const ContentBottomIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentRight = styled.div`
    width: 50%;
    height: 100%;
    padding: 1rem;
    height: 550px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h2 {
      text-align: center;
    }
`;
export const ContentAreaMoreInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 100px;

    gap: 1rem;

    > p {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      font-size: 1.3rem;
    }
`;


export const Verified = styled(GoVerified)`
  color: ${props => props.theme.colors.icons};
`;
