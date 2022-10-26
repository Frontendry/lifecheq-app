// Interfaces
import { GoalLayoutProps } from "../../../utils/interfaces";

// Components
import { UpArrow, DownArrow } from "./Arrows";

const GoalLayout = ({ goalName, imgSrc, oppositeSide }: GoalLayoutProps) => {
  return (
    <div className={`flex flex-col items-center w-full min-h-43 `}>
      <div
        className={`border border-cyan-750 w-0 h-4 rounded-full ${
          oppositeSide ? "order-3 mt-[8.52px] mb-1.5" : "mt-[8.52px] mb-[11px]"
        }`}
      ></div>

      {oppositeSide ? <DownArrow /> : <UpArrow />}
      <div className="bg-cyan-950 shadow-md-2 w-full min-h-34 pt-2 flex flex-col text-center rounded-5px">
        <figure className="flex items-start justify-center">
          <img src={imgSrc} alt={goalName} />
        </figure>
        <div className="p-2 flex-grow flex-shrink flex items-center justify-center">
          <p className="">{goalName}</p>
        </div>
      </div>
    </div>
  );
};

export default GoalLayout;
