import Tabs from "@mui/material/Tabs";
import { BriefcaseTaleWrapp } from "./style";
import TabsComponent from "../../molecule/tabs";
import BoxComponent from "../../molecule/box";
import { BondRoute, BriefcaseRoute, StockRoute } from "../../../route/const";

const BriefcaseTableComponent = () => {
  return (
    <BriefcaseTaleWrapp>
      <BoxComponent>
        <Tabs aria-label="basic tabs example">
          <TabsComponent
            label={"Акции"}
            way={`${BriefcaseRoute}/${StockRoute}`}
          />
          <TabsComponent
            label={"Облигации"}
            way={`${BriefcaseRoute}/${BondRoute}`}
          />
        </Tabs>
      </BoxComponent>
    </BriefcaseTaleWrapp>
  );
};

export default BriefcaseTableComponent;
