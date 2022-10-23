import { TimeframeNameProps } from "../../../utils/interfaces"

const TimeframeName = ({ name }: TimeframeNameProps) => {
      return (
        <div className="flex flex-col text-center">
          <p className="opacity-60">{name}</p>
        </div>
      );
};

export default TimeframeName