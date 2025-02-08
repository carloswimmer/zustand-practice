import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { BasicUsage } from "../components/subjects/BasicUsage";
import { GetSetImmer } from "../components/subjects/GetSetImmer";
import { MultiStatesSelection } from "../components/subjects/MultiStatesSelection";
import { SelectorAutogenerator } from "../components/subjects/SelectorAutogenerator";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Navigate to="/basic-usage" />} />
      <Route path="/basic-usage" element={<BasicUsage />} />
      <Route path="/get-set-immer" element={<GetSetImmer />} />
      <Route
        path="/multi-states-selection"
        element={<MultiStatesSelection />}
      />
      <Route
        path="/selector-autogenerator"
        element={<SelectorAutogenerator />}
      />
    </Switch>
  );
};

export default Routes;
