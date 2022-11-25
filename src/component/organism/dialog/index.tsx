import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FetchSuggestedPriceBondInterface,
  FetchSuggestedPriceStockInterface,
} from "../../../redux/interface/suggestedPriceInterface";
import LoaderComponent from "../../atom/loader";
import TypographyCompanent from "../../atom/typography";

interface DialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  loadingOneOrder: boolean;
  errorOneOrder: string;
  oneOrder:
    | FetchSuggestedPriceBondInterface[]
    | FetchSuggestedPriceStockInterface[];
}

const DialogC: React.FC<DialogProps> = ({
  oneOrder,
  open,
  setOpen,
  loadingOneOrder,
  errorOneOrder,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      {loadingOneOrder && <LoaderComponent />}
      {errorOneOrder && (
        <TypographyCompanent variant={"error"}>
          {errorOneOrder}
        </TypographyCompanent>
      )}
      {oneOrder.map((el) => (
        <>
          <DialogTitle>{el.status}</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <TextField
              value={el.amount}
              autoFocus
              margin="dense"
              id="name"
              label="Колличество акций"
              type="text"
              fullWidth
              variant="standard"
            />
            По цене {el.price} Цена всего лота
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Совершить сделку</Button>
          </DialogActions>
        </>
      ))}
    </Dialog>
  );
};

export default DialogC;
