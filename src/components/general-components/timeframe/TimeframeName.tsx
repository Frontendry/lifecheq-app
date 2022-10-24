import { TimeframeNameProps } from "../../../utils/interfaces"
import Separator from "./Separator";



const TimeframeName = ({ name }: TimeframeNameProps) => {
      return (
        <div className="flex flex-col text-center mt-[11px]">
          <Separator/>
          <p className="opacity-60">{name}</p>
        </div>
      );
};

export default TimeframeName