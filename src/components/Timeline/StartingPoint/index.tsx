// React Modules
import { useEffect, useState } from "react";

// Interface
import { TimeframeProps } from "../../../utils/interfaces";

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
    <TimeframeLayout>
      <div className="min-h-43 mb-1.5"></div>
      <TimeframeName
        name="You are here"
        uniformNameHeight={uniformNameHeight}
      />
    </TimeframeLayout>
  );
};

export default TimeFrame;
