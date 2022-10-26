// Goal Layout Component
import GoalLayout from "./GoalLayout";

// Image Type
import holiday from "../../../assets/svgs/going-holiday.svg"

const Holiday = () => {
  return (
    <GoalLayout goalName="Holiday" imgSrc={holiday} oppositeSide={true} />
  );
};

export default Holiday;
