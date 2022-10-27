// React Modules
import { useContext } from "react";

//Interfaces
import { separatorProps } from "../../../utils/interfaces";

// Context
import TimeframeSpaceContext from "../../../utils/TimeframeSpacingContext";

// Components
import connectorDots from "../../../assets/pngs/connector-dots.png";
import SeparatorLine from "./SeparatorLine";

const Separator = ({ secondLast }: separatorProps) => {
  const timeframeContextVal = useContext(TimeframeSpaceContext);
  const spacing = timeframeContextVal?.spacing;
  return (
    <div className="grid grid-cols-separator gap-x-1 items-center min-h-4.5 mb-2 relative">
      <figure>
        <SeparatorLine />
      </figure>

      <span className="bg-teal-650 h-2 rounded-full"></span>

      {!secondLast ? (
        <figure>
          <SeparatorLine />
        </figure>
      ) : (
        <figure className="relative h-0.5">
          <div
            className="absolute top-0 left-0 h-full"
            style={{
              width: `calc(200% + ${spacing}px + 48px)`,
              background: `url('${connectorDots}')`,
            }}
          ></div>
        </figure>
      )}

      {!secondLast ? (
        <figure
          className="absolute left-full top-1/2 -translate-y-1/2"
          style={{
            width: `${spacing}px`,
          }}
        >
          <SeparatorLine />
        </figure>
      ) : (
        ""
      )}
    </div>
  );
};

export default Separator;
