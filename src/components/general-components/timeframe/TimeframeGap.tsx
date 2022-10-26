// React Modules
import { useContext } from "react";

// Context
import TimeframeSpaceContext from "../../../utils/TimeframeSpacingContext";

const TimeframeGap = () => {
  const timeframeContextVal = useContext(TimeframeSpaceContext);
  const spacing = timeframeContextVal?.spacing
  
  return (
    <div
      style={{
        width: `${spacing}px`,
      }}
    ></div>
  );
};

export default TimeframeGap