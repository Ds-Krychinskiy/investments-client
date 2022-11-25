import { Dialog } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";

import styled from "styled-components";

export const DialogComponentWrapp = styled(Dialog)``;
export const DialogHeaderWrapp = styled(AppBar)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
`;
export const DialogHeaderStyle = styled(Toolbar)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
