import { createContext } from "react";

import { TimeframeSpaceValContext } from "./interfaces";

const TimeframeSpaceContext = createContext<TimeframeSpaceValContext | null>(null);

export default TimeframeSpaceContext;

