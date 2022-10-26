// Components
import SeparatorLine from "./SeparatorLine"

const Separator2 = () => {
  return (
    <div className="grid grid-cols-separator2 gap-x-1 items-center min-h-4.5 mb-2">
      <span/>
      <div className="h-[18px] rounded-full flex items-center justify-center bg-teal-650 ">
        <span className="bg-cyan-850 w-2 h-2 rounded-full"></span>
      </div>

      <figure>
        <SeparatorLine />
      </figure>
    </div>
  );
}

export default Separator2