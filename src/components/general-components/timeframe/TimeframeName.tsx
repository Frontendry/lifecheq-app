// Interfaces
import { TimeframeNameProps } from "../../../utils/interfaces"

// Components
import Separator from "./Separator";

const TimeframeName = ({ name, uniformNameHeight }: TimeframeNameProps) => {
  return (
    <div className="flex flex-col text-center relative">
      <Separator />
      <div
        className="flex flex-col justify-center goal-name-wrap"
        style={{
          height: `${uniformNameHeight}px`,
        }}
      >
        <div className="mx-height-content-holder">
          <p className="opacity-60">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeframeName