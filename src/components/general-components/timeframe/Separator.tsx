import { useContext } from "react";

// Context
import TimeframeSpaceContext from "../../../utils/TimeframeSpacingContext";

// Components
import SeparatorLine from "./SeparatorLine";

const Separator = () => {
   const timeframeContextVal = useContext(TimeframeSpaceContext);
   const spacing = timeframeContextVal?.spacing;
  return (
    <div className="grid grid-cols-separator gap-x-1 items-center min-h-4.5 mb-2 relative">
      <figure>
        <SeparatorLine />
      </figure>

      <span className="bg-teal-650 h-2 rounded-full"></span>

      <figure>
        <SeparatorLine />
      </figure>

      <figure
        className="absolute left-full top-1/2 -translate-y-1/2"
        style={{
          width: `${spacing}px`,
        }}
      >
        <SeparatorLine />
      </figure>
    </div>
  );
};

export default Separator;
