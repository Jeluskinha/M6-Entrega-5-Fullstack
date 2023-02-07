import styled from "styled-components";

const LoginModalStyle = styled.div`
  position: absolute;
  z-index: 9999;
  height: 100vh;
  width: 100vw;
  background-color: var(--Background-Modal);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: fit-content;
    width: 20vw;
    background-color: var(--Purple);
    padding: 20px 0;
    color: var(--fontColor-1);

    figure {
      height: 0;
      width: 100%;
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: flex-end;
      svg {
        height: 30px;
        width: 30px;
        margin-top: -30px;
        margin-right: -10px;
        color: var(--Grey-0);
        background-color: var(--Purple);
        border-radius: 50%;
        cursor: pointer;
      }
    }

    h2 {
      text-align: center;
      margin-bottom: 20px;
      font-size: var(--fontSize-Middle);
      font-weight: var(--fontWeight-Strong);
    }
    form {
      height: 100%;
      width: 100%;
      padding: 10px 20px;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      label {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1rem;
        h4 {
          font-size: var(--fontSize-Small);
          text-align: center;
        }
        input {
          margin: 0 auto;
          width: 90%;
        }
      }
      button {
        width: fit-content;
        padding: 5px 20px;
        border-radius: 8px;
        align-self: center;
        background-color: var(--White);
      }
    }
  }
`;

export default LoginModalStyle;
