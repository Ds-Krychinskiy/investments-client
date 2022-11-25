import { useState } from "react";
import { AdvancedSearchAction } from "../../../redux/action/stockAction";
import ButtonComponent from "../../atom/button";
import TypographyCompanent from "../../atom/typography";
import SelectMolecule from "../../molecule/selectMolecule";
import { AdvancedSearchStocks, AdvancedSearchStocksWrapp } from "./style";

type AdvancedSearchComponentProps = {
  show: boolean;
};

export type ListType = {
  value: string | number | boolean;
  label: string;
};

const AdvancedSearchComponent: React.FC<AdvancedSearchComponentProps> = ({
  show,
}) => {
  const [country, setCountry] = useState("");
  const [exchange, setExchange] = useState("");
  const [sector, setSector] = useState("");
  const [PE, setPE] = useState("");
  const [PS, setPS] = useState("");
  const [PB, setPB] = useState("");
  const [ROA, setROA] = useState("");
  const [ROE, setROE] = useState("");
  const [ROS, setROS] = useState("");
  const [LA, setLA] = useState("");
  const [PFCF, setPFCF] = useState("");
  const [ForQualifiedInvestors, setForQualifiedInvestors] = useState("");

  const ListCountry: ListType[] = [
    { value: "", label: "" },
    { value: "USA", label: "USA" },
    { value: "Russia", label: "Russia" },
    { value: "Germany", label: "Germany" },
    { value: "Hong Kong", label: "Hong Kong" },
    { value: "Great Britain", label: "Great Britain" },
    { value: "Japan", label: "Japan" },
  ];
  const ListExchange: ListType[] = [
    { value: "", label: "" },
    { value: "NYSE", label: "NYSE" },
    { value: "NASDAQ", label: "NASDAQ" },
    { value: "FWB", label: "FWB" },
    { value: "Hong Kong Stock Exchange", label: "Hong Kong Stock Exchange" },
    { value: "London Stock Exchange", label: "London Stock Exchange" },
    { value: "Tokyo stock exchange", label: "Tokyo stock exchange" },
  ];
  const ListSector: ListType[] = [
    { value: "", label: "" },
    { value: "Communication Services", label: "Услуги связи" },
    { value: "Energy", label: "Энергия" },
    { value: "Finance", label: "Финансы" },
    { value: "Healthcare", label: "Здравоохранение" },
    { value: "Industry", label: "Промышленность" },
    { value: "Real Estate", label: "Недвижимость" },
    { value: "Technologies", label: "Технологии" },
  ];

  const ListPE: ListType[] = [
    { value: "", label: "" },
    { value: "5", label: "До 5 лет" },
    { value: "10", label: "До 10 лет" },
    { value: "15", label: "До 15 лет" },
    { value: "20", label: "До 20 лет" },
    { value: "25", label: "До 25 лет" },
    { value: "30", label: "До 30 лет" },
    { value: "35", label: "До 35 лет" },
    { value: "40", label: "До 40 лет" },
    { value: "45", label: "До 45 лет" },
    { value: "50", label: "До 50 лет" },
    { value: "51", label: "Более 50 лет" },
  ];
  const ListPS: ListType[] = [
    { value: "", label: "" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "Более 10" },
  ];
  const ListPB: ListType[] = [
    { value: "", label: "" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "Более 10" },
  ];
  const ListROA: ListType[] = [
    { value: "", label: "" },
    { value: "10", label: "До 10%" },
    { value: "15", label: "До 15%" },
    { value: "20", label: "До 20%" },
    { value: "25", label: "До 25%" },
    { value: "30", label: "До 30%" },
    { value: "35", label: "До 35%" },
    { value: "40", label: "До 40%" },
    { value: "41", label: "Более 40%" },
  ];
  const ListROE: ListType[] = [
    { value: "", label: "" },
    { value: "10", label: "До 10%" },
    { value: "15", label: "До 15%" },
    { value: "20", label: "До 20%" },
    { value: "25", label: "До 25%" },
    { value: "30", label: "До 30%" },
    { value: "35", label: "До 35%" },
    { value: "40", label: "До 40%" },
    { value: "41", label: "Более 40%" },
  ];
  const ListROS: ListType[] = [
    { value: "", label: "" },
    { value: "10", label: "До 10%" },
    { value: "15", label: "До 15%" },
    { value: "20", label: "До 20%" },
    { value: "25", label: "До 25%" },
    { value: "30", label: "До 30%" },
    { value: "35", label: "До 35%" },
    { value: "40", label: "До 40%" },
    { value: "41", label: "Более 40%" },
  ];
  const ListLA: ListType[] = [
    { value: "", label: "" },
    { value: "10", label: "До 10%" },
    { value: "20", label: "До 20%" },
    { value: "30", label: "До 30%" },
    { value: "40", label: "До 40%" },
    { value: "50", label: "До 50%" },
    { value: "60", label: "До 60%" },
    { value: "70", label: "До 70%" },
    { value: "80", label: "До 80%" },
    { value: "90", label: "До 90%" },
    { value: "100", label: "Более 100%" },
  ];
  const ListPFCF: ListType[] = [
    { value: "", label: "" },
    { value: "10", label: "До 10%" },
    { value: "20", label: "До 20%" },
    { value: "30", label: "До 30%" },
    { value: "40", label: "До 40%" },
    { value: "50", label: "До 50%" },
    { value: "60", label: "До 60%" },
    { value: "70", label: "До 70%" },
    { value: "80", label: "До 80%" },
    { value: "90", label: "До 90%" },
    { value: "100", label: "Более 100%" },
  ];
  const ListForQualifiedInvestors = [
    { value: "Да", label: "Да" },
    { value: "Нет", label: "Нет" },
  ];

  return (
    <AdvancedSearchStocksWrapp show={show}>
      <TypographyCompanent
        children={"Расширенный поиск..."}
        variant={"value"}
      />
      <AdvancedSearchStocks>
        <SelectMolecule
          label={"Выберите страну..."}
          value={country}
          list={ListCountry}
          onChange={setCountry}
        ></SelectMolecule>
        <SelectMolecule
          label={"Выберите биржу..."}
          value={exchange}
          list={ListExchange}
          onChange={setExchange}
        ></SelectMolecule>
        <SelectMolecule
          label={"Выберите сектор..."}
          value={sector}
          list={ListSector}
          onChange={setSector}
        ></SelectMolecule>
        <SelectMolecule
          label={"Выберите срок окупаемости..."}
          value={PE}
          list={ListPE}
          onChange={setPE}
        ></SelectMolecule>
        <SelectMolecule
          label={"Цена/Объём продаж..."}
          value={PS}
          list={ListPS}
          onChange={setPS}
        ></SelectMolecule>
        <SelectMolecule
          label={"Цена/балансовая стоимость..."}
          value={PB}
          list={ListPB}
          onChange={setPB}
        ></SelectMolecule>
        <SelectMolecule
          label={"Рентабельность активов..."}
          value={ROA}
          list={ListROA}
          onChange={setROA}
        ></SelectMolecule>
        <SelectMolecule
          label={"Рентабельность собственного капитала..."}
          value={ROE}
          list={ListROE}
          onChange={setROE}
        ></SelectMolecule>
        <SelectMolecule
          label={"Рентабельности продаж..."}
          value={ROS}
          list={ListROS}
          onChange={setROS}
        ></SelectMolecule>
        <SelectMolecule
          label={"Уровень закредитованность..."}
          value={LA}
          list={ListLA}
          onChange={setLA}
        ></SelectMolecule>
        <SelectMolecule
          label={"Отношение цены к свободному денежному потоку..."}
          value={PFCF}
          list={ListPFCF}
          onChange={setPFCF}
        ></SelectMolecule>
        <SelectMolecule
          label={"Для квалифицированных инвесторов..."}
          value={ForQualifiedInvestors}
          list={ListForQualifiedInvestors}
          onChange={setForQualifiedInvestors}
        ></SelectMolecule>
      </AdvancedSearchStocks>
      <ButtonComponent
        variant={"search"}
        onClick={() =>
          AdvancedSearchAction({
            exchange,
            ForQualifiedInvestors,
            country,
            LA,
            PB,
            PE,
            PFCF,
            PS,
            ROA,
            ROE,
            ROS,
          })
        }
      >
        Поиск...
      </ButtonComponent>
    </AdvancedSearchStocksWrapp>
  );
};

export default AdvancedSearchComponent;
