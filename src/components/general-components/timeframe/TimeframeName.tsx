// React Modules
import { useEffect, useState } from "react";

// Interfaces
import { TimeframeNameProps } from "../../../utils/interfaces";

// Helpers
import { nameMarkup } from "../../../utils/helpers";

// Components
import Separator from "./Separator";
import Separator2 from "./Separator2";
import Separator3 from "./Separator3";

const TimeframeName = ({
  name,
  separator2,
  separator3,
  alignRight,
  secondLast,
}: TimeframeNameProps) => {
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
           element.querySelector(".mx-height-content-holder") &&
           typeof element.querySelector(".mx-height-content-holder") !==
             "undefined"
         ) {
           const clientHeightVal: number | undefined = element.querySelector(
             ".mx-height-content-holder"
           )?.clientHeight;
           if (
             typeof clientHeightVal !== "undefined" &&
             typeof maxHeight !== "undefined" &&
             clientHeightVal > maxHeight
           ) {
             maxHeight = clientHeightVal;
           }
         }
       });

       return maxHeight;
     };

     setUniformSetHeight(getMaxHeight());
   }, []);
  
  return (
    <div
      className={`flex flex-col text-center relative ${
        alignRight ? "-mr-20" : ""
      }`}
    >
      {separator2 ? (
        <Separator2 />
      ) : separator3 ? (
        <Separator3 />
      ) : (
        <Separator secondLast={secondLast} />
      )}

      <div
        className="flex flex-col justify-center goal-name-wrap overflow-hidden"
        style={{
          height: `${uniformNameHeight}px`,
        }}
      >
        <div className="mx-height-content-holder">
          <p
            className="opacity-60"
            dangerouslySetInnerHTML={nameMarkup(name)}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default TimeframeName;
