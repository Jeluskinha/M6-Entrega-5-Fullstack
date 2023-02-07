import styled from "styled-components";

const MainStyle = styled.main`
  height: 70vh;
  width: 80vw;
  background-color: var(--White);
  margin: 50px auto;
  overflow: ${({token}) => token ? 'scroll' : 'hidden'};
  overflow-x: hidden;
  /* width */
  &::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--Grey-1);
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  figure{
    height: 100%;
    width: 100%;
    img{
      height: 100%;
      width: 100%;
    }
  }

  ul {
    padding: 20px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-start;

    
  }
`;

export default MainStyle;
