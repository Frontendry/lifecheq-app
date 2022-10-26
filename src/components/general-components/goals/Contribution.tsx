// Goal Layout Component
import GoalLayout from "./GoalLayout";

// Image Type
import vision from "../../../assets/svgs/vision.svg";

const Contribution = () => (
  <GoalLayout
    goalName="Make a contribution to my community through philantrophy"
    imgSrc={vision}
    alignRight={true}
    alternateColor={true}
  />
);

export default Contribution;
