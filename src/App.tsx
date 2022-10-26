
// React Modules
import { useEffect, useState} from "react";

// Timelines
import StartingPoint from './components/Timeline/StartingPoint'
import OneYearNineMonths from "./components/Timeline/OneYearNineMonths";

function App() {
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

      return maxHeight
    }
    
    
    setUniformSetHeight(getMaxHeight());
     
  }, []);
  return (
    <main className="flex min-h-screen justify-center">
      <StartingPoint />
      <OneYearNineMonths />
    </main>
  );
}

export default App;
