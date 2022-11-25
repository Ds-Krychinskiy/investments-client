import { useNavigate } from "react-router-dom";
import { TabsStyle } from "./style";

type TabsComponentProps = {
  label: string;
  way: string;
};

const TabsComponent: React.FC<TabsComponentProps> = ({ label, way }) => {
  const navigate = useNavigate();

  const goToTabs = () => {
    navigate(`/${way}`);
  };
  return <TabsStyle label={label} onClick={() => goToTabs()} />;
};

export default TabsComponent;
