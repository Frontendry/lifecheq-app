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

export default SeparatorLine;