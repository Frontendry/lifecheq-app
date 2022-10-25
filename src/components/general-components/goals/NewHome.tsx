// Goal Layout Component
import GoalLayout from "./GoalLayout";

// Image Type
import home from "../../../assets/svgs/home.svg"

const NewHome = () => (
  <GoalLayout goalName="New Home" imgSrc={home} oppositeSide={true} />
);

export default NewHome;
