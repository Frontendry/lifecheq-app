// Interfaces
import { TimeframeNameProps } from "../../../utils/interfaces"

// Components
import Separator from "./Separator";

const TimeframeName = ({ name }: TimeframeNameProps) => {
      return (
        <div className="flex flex-col text-center relative">
          <Separator/>
          <p className="opacity-60">{name}</p>
        </div>
      );
};

export default TimeframeName