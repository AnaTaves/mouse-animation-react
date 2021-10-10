import styled, { keyframes, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  background: black;
  box-sizing:border-box;
}
`;

const scroll = keyframes`
 0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translateY(26px)
    }
`;

export const Mouse = styled.div`
  width: 30px;
  height: 50px;
  bottom: 10px;
  border: 2px solid #fff;
  border-radius: 25px;
  position: absolute;
  left: 50%;

  &:before {
    position: absolute;
    left: 50%;
    content: "";
    width: 8px;
    height: 8px;
    background: #fff;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: ${scroll};
  }
`;
