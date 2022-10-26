export interface GoalLayoutProps {
  goalName: string;
  imgSrc: string;
  oppositeSide?: boolean
}

export interface TimeLayoutProps {
  children: JSX.Element | JSX.Element[];
  startTimeframe?: boolean;
}

export interface TimeframeProps {
  uniformNameHeight?: number;
}

export interface TimeframeNameProps {
  name: string;
  uniformNameHeight: number;
  separator2?: boolean;
}

export interface TimeframeSpaceValContext {
  spacing: number;
} 



