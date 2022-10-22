// Interfaces
import { GoalProps } from "../../utils/interfaces";

const Goal = ({ goalName, imgSrc }: GoalProps) => {
      return (
        <div className="bg-cyan-950 shadow-md-2 w-33 min-h-34 pt-2 flex flex-col text-center rounded-5px">
          <figure className="flex items-start justify-center">
            <img src={imgSrc} alt={goalName} />
          </figure>
          <div className="p-2 flex-grow flex-shrink flex items-center justify-center">
            <p className="">{goalName}</p>
          </div>
        </div>
      );
};

export default Goal;
