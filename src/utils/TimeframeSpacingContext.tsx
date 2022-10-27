// React Modules
import { createContext } from "react";

import { TimeframeSpaceValContext } from "./interfaces";

// Create Context
const TimeframeSpaceContext = createContext<TimeframeSpaceValContext | null>(null);

export default TimeframeSpaceContext;

