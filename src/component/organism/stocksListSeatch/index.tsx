import TypographyCompanent from "../../atom/typography";
import { TableCellStyle, TableRowStyle } from "../bondsListSearch/style";
import { StockProps } from "../../../redux/interface/stockInterface";
import DialogComponent from "../dialogOrders";
import { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { PaperStyle, StockListSeatchWrapp } from "./style";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import {
  fetchOneOrderByStock,
  fetchSuggestedPriceStocks,
} from "../../../redux/action/suggestedPriceAction";

type StocksListSearchProps = {
  stocks: StockProps[];
  error: string;
  goToStockPage: (id: number) => void;
};

const StocksListSearch: React.FC<StocksListSearchProps> = ({
  stocks,
  goToStockPage,
}) => {
  const dispatch = useAppDispatch();

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

  const headerTable = [
    "Name",
    "Tiker",
    "Capitalization",
    "P/E",
    "P/B",
    "P/S",
    "L/A",
    "P/FCF",
    "ROA",
    "ROE",
    "ROS",
  ];
  return (
    <StockListSeatchWrapp>
      <PaperStyle sx={{ backgroundColor: "#2d3442" }}>
        <TableContainer sx={{ backgroundColor: "#2d3442" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {headerTable.map((el) => (
                  <TableCellStyle
                    sx={{ backgroundColor: "#2d3442" }}
                    key={el}
                    children={
                      <TypographyCompanent variant={"significative"}>
                        {el}
                      </TypographyCompanent>
                    }
                  />
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? stocks.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : stocks
              ).map((el) => (
                <TableRowStyle key={el.id}>
                  <TableCellStyle
                    onClick={() => goToStockPage(el.id)}
                    children={
                      <TypographyCompanent variant={"significative"}>
                        {el.name}
                      </TypographyCompanent>
                    }
                  />
                  <TableCellStyle
                    children={
                      <TypographyCompanent variant={"significative"}>
                        {el.tiker}
                      </TypographyCompanent>
                    }
                  />
                  <TableCellStyle
                    children={
                      <TypographyCompanent variant={"significative"}>
                        {el.capitalization}
                      </TypographyCompanent>
                    }
                  />
                  <TableCellStyle
                    children={
                      <TypographyCompanent variant={"significative"}>
                        {el.PE}
                      </TypographyCompanent>
                    }
                  />
                  <TableCellStyle
                    children={
                      <TypographyCompanent variant={"significative"}>
                        {el.PB}
                      </TypographyCompanent>
                    }
                  />
                  <TableCellStyle
                    children={
                      <TypographyCompanent variant={"significative"}>
                        {el.PS}
                      </TypographyCompanent>
                    }
                  />
                  <TableCellStyle
                    children={
                      <TypographyCompanent variant={"significative"}>
                        {el.LA}
                      </TypographyCompanent>
                    }
                  />
                  <TableCellStyle
                    children={
                      <TypographyCompanent variant={"significative"}>
                        {el.PFCF}
                      </TypographyCompanent>
                    }
                  />
                  <TableCellStyle
                    children={
                      <TypographyCompanent variant={"significative"}>
                        {el.ROA}
                      </TypographyCompanent>
                    }
                  />
                  <TableCellStyle
                    children={
                      <TypographyCompanent variant={"significative"}>
                        {el.ROE}
                      </TypographyCompanent>
                    }
                  />
                  <TableCellStyle
                    children={
                      <TypographyCompanent variant={"significative"}>
                        {el.ROS}
                      </TypographyCompanent>
                    }
                  />
                </TableRowStyle>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ color: "#dcdcdc;" }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={stocks.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </PaperStyle>
    </StockListSeatchWrapp>
  );
};

export default StocksListSearch;
