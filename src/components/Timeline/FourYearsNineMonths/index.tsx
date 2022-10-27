// Time Frame Layout
import TimeframeLayout from "../../general-components/timeframe/TimeframeLayout";

// Time Frame Components
import TimeframeName from "../../general-components/timeframe/TimeframeName";
import EmergencyFund from "../../general-components/goals/EmergencyFund";

const TimeFrame = () => {
 
  return (
    <TimeframeLayout>
      <div className="min-h-43 mb-1.5"></div>
      <TimeframeName
        name="In 4 years and <br> 9 months"/>
      <EmergencyFund/>      
    </TimeframeLayout>
  );
};

export default TimeFrame;
