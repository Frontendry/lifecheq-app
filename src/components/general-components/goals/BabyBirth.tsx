// Goal Layout Component
import GoalLayout from "./GoalLayout";

// Image Type
import family from "../../../assets/svgs/family.svg"

const BabyBirth = () => (
  <GoalLayout goalName="Baby's birth" imgSrc={family} oppositeSide={true} />
);

export default BabyBirth