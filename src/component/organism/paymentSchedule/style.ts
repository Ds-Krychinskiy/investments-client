import styled from "styled-components";

export const PaymentScheduleWrapp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 5em;
`;

export const PaymentScheduleStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const TableRowStyle = styled.div<{ loading: boolean }>`
  ${(props) => props.loading && "display: flex; justify-content: center"};
`;

export const TableWrappStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
