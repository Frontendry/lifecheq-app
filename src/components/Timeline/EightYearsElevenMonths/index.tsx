// Time Frame Layout
import TimeframeLayout from "../../general-components/timeframe/TimeframeLayout";

// Time Frame Components
import TimeframeName from "../../general-components/timeframe/TimeframeName";
import DebtFree from "../../general-components/goals/DebtFree";

const TimeFrame = () => { 
  return (
    <TimeframeLayout>
      <div className="min-h-43 mb-1.5"></div>
      <TimeframeName
        name="In 8 years and <br> 11 months"       
        secondLast={true}
      />
      <DebtFree />
    </TimeframeLayout>
  );
};

export default TimeFrame;
