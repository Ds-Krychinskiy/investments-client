import styled from "styled-components";

export const SelectStockHeaderWrapp = styled.div<{ loading: boolean | string }>`
  ${(props) =>
    props.loading
      ? "display: flex; justify-content: center;   align-items: center;"
      : "display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr 1fr 1fr;  flex-direction: column;  justify-content: center;"};
  width: 95%;
  height: 15em;
  padding: 3vh;
  border-radius: 1em;
  background-color: #2d3442;
  margin-bottom: 5em;
`;
