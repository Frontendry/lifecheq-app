// React Modules
import { useEffect, useState } from "react";

// Time Frame Components
import TimeframeName from "../../general-components/timeframe/TimeframeName";

// Time Frame Layout
import TimeframeLayout from "../../general-components/timeframe/TimeframeLayout";

const TimeFrame = () => {
      const [uniformNameHeight, setUniformSetHeight] = useState<number>(0);
      useEffect(() => {
        const allWithClass = Array.from(
          document.querySelectorAll(".goal-name-wrap")
            );
            
            console.log(allWithClass);

        const getMaxHeight = () => {
          let maxHeight: number | undefined = -1;
          allWithClass.forEach((element) => {
            if (
              element &&
              typeof element.querySelector(".mx-height-content-holder") !==
                "undefined"
            ) {
              maxHeight = element.querySelector(
                ".mx-height-content-holder"
              )?.clientHeight;
            }
          });

          return maxHeight;
        };

        setUniformSetHeight(getMaxHeight());
      }, []);
  return (
    <TimeframeLayout startTimeframe={true}>
      <div className="min-h-43 mb-1.5"></div>
      <TimeframeName
        name="You are<br>here"
        uniformNameHeight={uniformNameHeight}
        separator2={true}
      />
    </TimeframeLayout>
  );
};

export default TimeFrame;
