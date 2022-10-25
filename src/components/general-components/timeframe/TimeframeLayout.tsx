// Interfaces
import { TimeLayoutProps } from "../../../utils/interfaces";

const TimeframeLayout = ({ children }: TimeLayoutProps) => (
  <div className="flex flex-col w-33 relative">{children}</div>
);

export default TimeframeLayout;
