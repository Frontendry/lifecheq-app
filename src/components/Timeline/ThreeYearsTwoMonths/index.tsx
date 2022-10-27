// Time Frame Layout
import TimeframeLayout from "../../general-components/timeframe/TimeframeLayout";

// Time Frame Components
import Holiday from "../../general-components/goals/Holiday";
import TimeframeName from "../../general-components/timeframe/TimeframeName";


const TimeFrame = () => {
 
  return (
    <TimeframeLayout>
      <Holiday />
      <TimeframeName
        name="In 3 years and <br> 2 months"        
      />
    </TimeframeLayout>
  );
};

export default TimeFrame;
