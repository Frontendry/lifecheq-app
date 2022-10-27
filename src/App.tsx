// Context
import TimeframeSpaceContext from "./utils/TimeframeSpacingContext";

// Timelines
import StartingPoint from "./components/Timeline/StartingPoint";
import OneYearNineMonths from "./components/Timeline/OneYearNineMonths";
import ThreeYearsTwoMonths from "./components/Timeline/ThreeYearsTwoMonths";
import TimeframeGap from "./components/general-components/timeframe/TimeframeGap";
import FourYearsNineMonths from "./components/Timeline/FourYearsNineMonths";
import EightYearsElevenMonths from "./components/Timeline/EightYearsElevenMonths";
import Retire from "./components/Timeline/Retire";
import Ultimately from "./components/Timeline/Ultimately";

function App() {  
  return (
    <main className="flex justify-center items-center  min-h-screen">
      <div className="grid grid-flow-col auto-cols-min relative">
        <StartingPoint />

        <TimeframeSpaceContext.Provider value={{ spacing: 8 }}>
          <OneYearNineMonths />
          <TimeframeGap />
        </TimeframeSpaceContext.Provider>

        <TimeframeSpaceContext.Provider value={{ spacing: 19 }}>
          <ThreeYearsTwoMonths />
          <TimeframeGap />
        </TimeframeSpaceContext.Provider>

        <TimeframeSpaceContext.Provider value={{ spacing: 77 }}>
          <FourYearsNineMonths />
          <TimeframeGap />
        </TimeframeSpaceContext.Provider>

        <TimeframeSpaceContext.Provider value={{ spacing: 12 }}>
          <EightYearsElevenMonths />
          <TimeframeGap />
        </TimeframeSpaceContext.Provider>

        <Retire />

        <Ultimately />
      </div>
    </main>
  );
}

export default App;
