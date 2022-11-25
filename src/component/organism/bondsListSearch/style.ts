import styled from "styled-components";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";

export const TableContainerStyle = styled.div<{ loading: boolean }>`
  ${(props) =>
    props.loading &&
    "display: flex; justify-content: center;  align-items: center;   flex-direction: column;"}
`;

export const TableCellStyle = styled(TableCell)`
  display: flex;
  flex-direction: column;
  cursor: "pointer";
`;

export const TableRowStyle = styled(TableRow)``;

export const TableHeadStyle = styled(TableHead)``;
export const HeaderTableWrapp = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em;
  flex-direction: column;
`;

export const TableBodyWrapp = styled(TableBody)`
  width: 100%;
  height: 15em;
`;

export const LoaderWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
