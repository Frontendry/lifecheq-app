// Interfaces
import { TimeLayoutProps } from "../../../utils/interfaces";

const TimeframeLayout = ({ children }: TimeLayoutProps) => {
  return <div className="flex flex-col w-33">{children}</div>;
};

export default TimeframeLayout;
