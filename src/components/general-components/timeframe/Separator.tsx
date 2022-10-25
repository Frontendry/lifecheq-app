const SeparatorLine = () => {
  return (
    <svg height="2" width="100%">
      <line
        x1="0"
        y1="2"
        x2="100%"
        y2="2"
        strokeLinecap="round"
        className="stroke-white stroke-4"
      />
    </svg>
  );
};

const Separator = () => {
  return (
    <div className="grid grid-cols-separator gap-x-1 items-center min-h-4.5 absolute -top-[1.625rem] left-0 w-full">
      <figure>
        <SeparatorLine />
      </figure>

      <span className="bg-teal-650 h-2 rounded-full"></span>
      
      <figure>
        <SeparatorLine />
      </figure>
    </div>
  );
};

export default Separator;
