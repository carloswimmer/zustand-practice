import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { BasicUsage } from "../components/subjects/BasicUsage";
import { GetSetImmer } from "../components/subjects/GetSetImmer";
import { MultiStatesSelection } from "../components/subjects/MultiStatesSelection";
import { SelectorAutogenerator } from "../components/subjects/SelectorAutogenerator";
import { ReduxDevtolls } from "../components/subjects/ReduxDevtools";
import { Persist } from "../components/subjects/Persist";
import { SubscribeWithSelector } from "../components/subjects/SubscribeWithSelector";

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
      <Route path="/redux-devtools" element={<ReduxDevtolls />} />
      <Route path="/persist" element={<Persist />} />
      <Route
        path="/subscribe-with-selector"
        element={<SubscribeWithSelector />}
      />
    </Switch>
  );
};

export default Routes;
