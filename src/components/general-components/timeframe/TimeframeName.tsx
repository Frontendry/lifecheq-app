// Interfaces
import { TimeframeNameProps } from "../../../utils/interfaces"

// Components
import Separator from "./Separator";
import Separator2 from "./Separator2";

function nameMarkup(name : string) {
  return { __html: name };
}

const TimeframeName = ({
  name,
  uniformNameHeight,
  separator2
}: TimeframeNameProps) => {
  return (
    <div className="flex flex-col text-center relative">
      {separator2 ? <Separator2 /> : <Separator />}

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

export default TimeframeName