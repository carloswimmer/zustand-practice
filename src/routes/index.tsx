import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { BasicUsage } from "../lessons/basic-usage/BasicUsage";
import { GetSetImmer } from "../lessons/get-set-immer/GetSetImmer";
import { MultiStatesSelection } from "../lessons/multi-states-selection/MultiStatesSelection";
import { SelectorAutogenerator } from "../lessons/selector-autogenerator/SelectorAutogenerator";
import { ReduxDevtolls } from "../lessons/redux-devtools/ReduxDevtools";
import { Persist } from "../lessons/persist/Persist";
import { SubscribeWithSelector } from "../lessons/subscribe-with-selector/SubscribeWithSelector";

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
