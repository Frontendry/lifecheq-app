// Time Frame Components
import TimeframeName from "../../general-components/timeframe/TimeframeName";

// Time Frame Layout
import TimeframeLayout from "../../general-components/timeframe/TimeframeLayout";

const TimeFrame = () => {
     
  return (
    <TimeframeLayout startTimeframe={true}>
      <div className="min-h-43 mb-1.5"></div>
      <TimeframeName
        name="You are<br>here"       
        separator2={true}
      />
    </TimeframeLayout>
  );
};

export default TimeFrame;
