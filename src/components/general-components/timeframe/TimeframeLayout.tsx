// Interfaces
import { TimeLayoutProps } from "../../../utils/interfaces";

const TimeframeLayout = ({ children, startTimeframe }: TimeLayoutProps) => (
  <div
    className={`flex flex-col relative ${
      startTimeframe ? "w-[4.438rem]" : "w-33"
    }`}
  >
    {children}
  </div>
);

export default TimeframeLayout;
