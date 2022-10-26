// Interface
import { TimeframeProps } from "../../../utils/interfaces";

// Time Frame Layout
import TimeframeLayout from "../../general-components/timeframe/TimeframeLayout";

// Time Frame Components
import BabyBirth from "../../general-components/goals/BabyBirth";
import TimeframeName from "../../general-components/timeframe/TimeframeName";
import NewHome from "../../general-components/goals/NewHome";

const TimeFrame = ({ uniformNameHeight }: TimeframeProps) => {
  return (
    <TimeframeLayout>
      <BabyBirth />
      <TimeframeName
        name="In 1 year and 9 months"
        uniformNameHeight={uniformNameHeight}
      />
      <NewHome />
    </TimeframeLayout>
  );
};

export default TimeFrame;
