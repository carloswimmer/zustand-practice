import { PropsWithChildren } from "react";

interface WebComponentSimulationProps {
  background?: string;
}

export const WebComponentSimulation = ({
  background,
  children,
}: PropsWithChildren<WebComponentSimulationProps>) => {
  return (
    <div
      className="web-component-simulation"
      style={{ backgroundColor: background }}
    >
      {children}
    </div>
  );
};
