import { NavLink } from "react-router-dom";

const routes = [
  { path: "/basic-usage", label: "Basic Usage" },
  { path: "/get-set-immer", label: "Get Set Immer" },
  { path: "/selector-autogenerator", label: "Selectors" },
  { path: "/multi-states-selection", label: "Multi State" },
  { path: "/redux-devtools", label: "Devtolls" },
  { path: "/persist", label: "Persist" },
  { path: "/subscribe-with-selector", label: "Subscribe" },
  { path: "/get-state-set-state", label: "Get/SetState" },
  { path: "/context-with-store", label: "Context + Store" },
];

export const Header = () => {
  return (
    <header>
      <div className="header">
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <button className="menu">{route.label}</button>
          </NavLink>
        ))}
      </div>
    </header>
  );
};
