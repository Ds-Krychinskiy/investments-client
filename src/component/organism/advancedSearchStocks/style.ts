import styled from "styled-components";

export const AdvancedSearchStocks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 100em;
  height: 15em;
  justify-items: center;
`;

export const AdvancedSearchStocksWrapp = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25em;
`;
