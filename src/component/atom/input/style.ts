import styled from "styled-components";

export const InputComponentStyle = styled.input`
  max-width: 500px;
  width: 100%;
  max-height: 35px;
  height: 100%;
  padding-left: 15px;
  border-radius: 10px;
  ::placeholder {
    color: #292e39;
  }
  :focus {
    ::placeholder {
      color: white;
    }
  }
`;
