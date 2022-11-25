import {
  LoaderWrapp,
  TableBodyWrapp,
  TableCellStyle,
  TableContainerStyle,
  TableRowStyle,
} from "./style";
import {
  Table,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

import { useAppSelector } from "../../../redux/hooks/hooks";
import LoaderComponent from "../../atom/loader";
import { PaperStyle } from "../stocksListSeatch/style";
import TypographyCompanent from "../../atom/typography";

type TableBondComponentProps = {
  goToBondPage: (id: number) => void;
};

const TableBondComponent: React.FC<TableBondComponentProps> = ({
  goToBondPage,
}) => {
  const headerTable = [
    "Название",
    "Номинал",
    "НКД",
    "Купон",
    "Ставка",
    "Доходность",
  ];

  const { bonds, isLoadingListBonds, errorLoadingListBonds } = useAppSelector(
    (state) => state.BondReducer
  );

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainerStyle loading={true}>
      <PaperStyle sx={{ backgroundColor: "#2d3442" }}>
        <TableContainer sx={{ backgroundColor: "#2d3442" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {headerTable.map((el) => (
                  <TableCellStyle
                    children={
                      <TypographyCompanent
                        variant={"significative"}
                        children={el}
                      />
                    }
                    sx={{ backgroundColor: "#2d3442" }}
                  />
                ))}
              </TableRow>
            </TableHead>
            <TableBodyWrapp>
              {isLoadingListBonds && <LoaderComponent />}
              {errorLoadingListBonds && (
                <TypographyCompanent variant={"error"}>
                  {errorLoadingListBonds}
                </TypographyCompanent>
              )}
              {(rowsPerPage > 0
                ? bonds.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : bonds
              ).map((el) => (
                <React.Fragment key={el.id}>
                  <TableRowStyle
                    key={el.id}
                    onClick={() => goToBondPage(el.id)}
                  >
                    <TableCellStyle
                      children={
                        <TypographyCompanent
                          variant={"significative"}
                          children={el.name}
                        />
                      }
                    />
                    <TableCellStyle
                      children={
                        <TypographyCompanent
                          variant={"significative"}
                          children={el.denomination}
                        />
                      }
                    />
                    <TableCellStyle
                      children={
                        <TypographyCompanent
                          variant={"significative"}
                          children={el.nkd}
                        />
                      }
                    />
                    <TableCellStyle
                      children={
                        <TypographyCompanent
                          variant={"significative"}
                          children={el.coupon}
                        />
                      }
                    />
                    <TableCellStyle
                      children={
                        <TypographyCompanent
                          variant={"significative"}
                          children={el.ante}
                        />
                      }
                    />
                    <TableCellStyle
                      children={
                        <TypographyCompanent
                          variant={"significative"}
                          children={el.profitability}
                        />
                      }
                    />
                  </TableRowStyle>
                </React.Fragment>
              ))}
            </TableBodyWrapp>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ color: "#dcdcdc;" }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={bonds.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </PaperStyle>
    </TableContainerStyle>
  );
};

export default TableBondComponent;
