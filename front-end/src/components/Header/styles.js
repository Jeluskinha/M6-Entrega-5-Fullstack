import styled from 'styled-components';

const HeaderStyle = styled.header`
  height: 80px;
  width: 100vw;
  padding: 0 20px;
  background-color: var(--Purple);
  display: flex;
  justify-content: space-between;
  align-items: center;

  figure{
    height: 90%;
    width: fit-content;
    img{
      height: 100%;
      width: 100%;
    }
  }

  div{
    height: fit-content;
    width: fit-content;
    display: flex;
    gap: 1rem;

    h2{
      color: var(--fontColor-1);
    }
    button{
      border-radius: 8px;
      background-color: var(--fontColor-1);
      color: var(--fontColor-2);
      padding: 5px;
      border: none;
    }
  }
`;

export default HeaderStyle;