// Interfaces
import { ArrowsProps } from "../../../utils/interfaces";

const UpArrow = ({ alignRight, alternateColor }: ArrowsProps) => (
  <div
    className={`w-0 h-0 border-solid border-transparent border-l-[7.395px] border-r-[7.395px] border-b-[6.48px] relative z-10 ${
      alternateColor ? "border-b-cyan-750" : "border-b-cyan-950"
    }   ${alignRight ? "-mr-20" : ""}`}
  ></div>
);
const DownArrow = () => (
  <div className="order-2 w-0 h-0 border-solid border-transparent border-l-[7.395px] border-r-[7.395px] border-t-[6.48px]  border-t-cyan-950 relative z-10"></div>
);

export  { UpArrow, DownArrow };