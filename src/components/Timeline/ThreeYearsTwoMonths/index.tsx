// React Modules
import { useEffect, useState } from "react";

// Time Frame Layout
import TimeframeLayout from "../../general-components/timeframe/TimeframeLayout";

// Time Frame Components
import Holiday from "../../general-components/goals/Holiday";
import TimeframeName from "../../general-components/timeframe/TimeframeName";


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
      <Holiday />
      <TimeframeName
        name="In 3 years and <br> 2 months"
        uniformNameHeight={uniformNameHeight}
      />
    </TimeframeLayout>
  );
};

export default TimeFrame;
