import styled from 'styled-components';

export const Container = styled.div`
  height: 90px;


  ul {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      list-style: none;
      font-size: 1.3rem;
      color: ${props => props.theme.colors.subText};

      & + li {
        margin-left: 10px;
      }

      & + li + li {
        margin-left: 1rem;
      }
    }
  }
`;
