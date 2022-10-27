// Time Frame Layout
import TimeframeLayout from "../../general-components/timeframe/TimeframeLayout";

// Time Frame Components
import TimeframeName from "../../general-components/timeframe/TimeframeName";
import Contribution from "../../general-components/goals/Contribution";

const TimeFrame = () => {

  return (
    <TimeframeLayout>
      <div className="min-h-43 mb-1.5"></div>
      <TimeframeName
        name="Ultimately"
        separator3={true}
        alignRight={true}
      />
      <Contribution />
    </TimeframeLayout>
  );
};

export default TimeFrame;
