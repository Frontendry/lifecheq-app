

// Interfaces
import { TimeframeNameProps } from "../../../utils/interfaces";

// Helpers
import { nameMarkup } from "../../../utils/helpers";

// Components
import Separator from "./Separator";
import Separator2 from "./Separator2";
import Separator3 from "./Separator3";

const TimeframeName = ({
  name,
  separator2,
  separator3,
  alignRight,
  secondLast,
}: TimeframeNameProps) => {
 
  return (
    <div
      className={`flex flex-col text-center relative ${
        alignRight ? "-mr-20" : ""
      }`}
    >
      {separator2 ? (
        <Separator2 />
      ) : separator3 ? (
        <Separator3 />
      ) : (
        <Separator secondLast={secondLast} />
      )}

      <div
        className="flex flex-col justify-center goal-name-wrap overflow-hidden"
        
      >
        <div className="mx-height-content-holder">
          <p
            className="opacity-60"
            dangerouslySetInnerHTML={nameMarkup(name)}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default TimeframeName;
