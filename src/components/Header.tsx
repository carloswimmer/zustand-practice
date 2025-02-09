import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="header">
        <Link to="/basic-usage">
          <button className="menu">Basic Usage</button>
        </Link>
        <Link to="/get-set-immer">
          <button className="menu">Get Set Immer</button>
        </Link>
        <Link to="/selector-autogenerator">
          <button className="menu">Selectors</button>
        </Link>
        <Link to="/multi-states-selection">
          <button className="menu">Multi State</button>
        </Link>
      </div>
    </header>
  );
};
