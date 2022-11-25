import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import {
  FetchSuggestedPriceBondInterface,
  FetchSuggestedPriceStockInterface,
} from "../../../redux/interface/suggestedPriceInterface";
import LoaderComponent from "../../atom/loader";
import TypographyCompanent from "../../atom/typography";
import DialogC from "../dialog";
import {
  DialogComponentWrapp,
  DialogHeaderStyle,
  DialogHeaderWrapp,
} from "./style";

type DialogComponentProps = {
  open: boolean;
  loadingListOrden: boolean;
  errorListOrden: string;
  loadingOneOrder: boolean;
  errorOneOrder: string;
  onClick: () => void;
  oneOrder:
    | FetchSuggestedPriceBondInterface[]
    | FetchSuggestedPriceStockInterface[];
  order:
    | FetchSuggestedPriceStockInterface[]
    | FetchSuggestedPriceBondInterface[];
  fetchOneOrder: (id: number) => any;
};

const DialogComponent: React.FC<DialogComponentProps> = ({
  order,
  oneOrder,
  open,
  loadingOneOrder,
  errorOneOrder,
  errorListOrden,
  loadingListOrden,
  onClick,
  fetchOneOrder,
}) => {
  const [openDialog, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const WholeLotPrice = (amount: number, price: string) => {
    return `${amount * Number(price)}$`;
  };

  const handleClickOpen = async (id: number) => {
    await dispatch(fetchOneOrder(id));
    setOpen(true);
  };

  return (
    <DialogComponentWrapp open={open} fullScreen>
      {loadingListOrden && <LoaderComponent />}
      <DialogHeaderWrapp sx={{ backgroundColor: "#d0de3c" }}>
        <DialogHeaderStyle>
          <Typography variant="h6">Торги</Typography>
          <Button autoFocus color="inherit" onClick={onClick}>
            Закрыть
          </Button>
        </DialogHeaderStyle>
      </DialogHeaderWrapp>
      <List>
        {errorListOrden && (
          <TypographyCompanent variant={"error"}>
            {errorListOrden}
          </TypographyCompanent>
        )}
        {order?.map((el) => (
          <React.Fragment key={el.id}>
            <DialogC
              oneOrder={oneOrder}
              open={openDialog}
              setOpen={setOpen}
              errorOneOrder={errorOneOrder}
              loadingOneOrder={loadingOneOrder}
            />
            <ListItem button>
              <ListItemText
                primary={`Количество: ${el.amount}, Цена: ${el.price} $`}
                secondary={`Статус: ${el.status}`}
              />
              Цена всего лота: {WholeLotPrice(el.amount, el.price)}
              <button onClick={() => handleClickOpen(el.id)}>
                Совершить сделку
              </button>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </DialogComponentWrapp>
  );
};

export default DialogComponent;
