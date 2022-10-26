// React Modules
import { useEffect, useState } from "react";

// Interface
import { TimeframeProps } from "../../../utils/interfaces";

// Time Frame Layout
import TimeframeLayout from "../../general-components/timeframe/TimeframeLayout";

// Time Frame Components
import BabyBirth from "../../general-components/goals/BabyBirth";
import TimeframeName from "../../general-components/timeframe/TimeframeName";
import NewHome from "../../general-components/goals/NewHome";

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
