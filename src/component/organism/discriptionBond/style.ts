import styled from "styled-components";

export const DiscriptionBondWrapp = styled.div<{ loading: boolean }>`
  ${(props) =>
    props.loading
      ? "display: flex;   justify-content: center;   align-items: center;"
      : "display: grid;   grid-template-columns: 1fr 1fr 1fr 1fr;  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;"}

  height: 15em;
  width: 100em;
`;
export const HeaderTableWrapp = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em;
  margin-top: 5em;
`;
