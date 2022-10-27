// Time Frame Layout
import TimeframeLayout from "../../general-components/timeframe/TimeframeLayout";

// Time Frame Components
import BabyBirth from "../../general-components/goals/BabyBirth";
import TimeframeName from "../../general-components/timeframe/TimeframeName";
import NewHome from "../../general-components/goals/NewHome";

const TimeFrame = () => {
  
  return (
    <TimeframeLayout>
      <BabyBirth />
      <TimeframeName
        name="In 1 year and 9 months"            
      />
      <NewHome />
    </TimeframeLayout>
  );
};

export default TimeFrame;
