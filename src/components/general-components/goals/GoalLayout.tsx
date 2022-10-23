// Interfaces
import { GoalLayoutProps } from "../../../utils/interfaces";

const GoalLayout = ({ goalName, imgSrc }: GoalLayoutProps) => {
  return (
    <div className="flex flex-col items-center w-full min-h-43">
      <div className="bg-cyan-950 shadow-md-2 w-full min-h-34 pt-2 flex flex-col text-center rounded-5px">
        <figure className="flex items-start justify-center">
          <img src={imgSrc} alt={goalName} />
        </figure>
        <div className="p-2 flex-grow flex-shrink flex items-center justify-center">
          <p className="">{goalName}</p>
        </div>
      </div>

      <div className="w-0 h-0 border-solid border-transparent border-l-[7.395px] border-r-[7.395px] border-t-[6.48px] border-t-cyan-950"></div>

      <div className="border border-cyan-750 w-0 h-4 rounded-full mt-[8.52px]"></div>
    </div>
  );
};

export default GoalLayout;
