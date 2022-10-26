// Context 
import TimeframeSpaceContext from './utils/TimeframeSpacingContext';

// Timelines
import StartingPoint from './components/Timeline/StartingPoint'
import OneYearNineMonths from "./components/Timeline/OneYearNineMonths";
import ThreeYearsTwoMonths from "./components/Timeline/ThreeYearsTwoMonths"
import TimeframeGap from './components/general-components/timeframe/TimeframeGap';
import FourYearsNineMonths from "./components/Timeline/FourYearsNineMonths"
import EightYearsElevenMonths from "./components/Timeline/EightYearsElevenMonths"

function App() {
 
  return (
    <main className="grid grid-flow-col auto-cols-min min-h-screen justify-center">
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

      <EightYearsElevenMonths/>
     
    </main>
  );
}

export default App;
