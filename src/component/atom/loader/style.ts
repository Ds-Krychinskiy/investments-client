import styled, { keyframes } from "styled-components";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const LoaderStyle = styled.div`
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  border: 8px solid rgba(255, 248, 51, 0.6);
  border-radius: 50%;
  border-right-color: #fff833;
  animation: ${rotate} 1.3s linear infinite;
`;
