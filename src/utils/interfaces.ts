export interface GoalLayoutProps {
  goalName: string;
  imgSrc: string;
  oppositeSide?: boolean
}

export interface TimeLayoutProps {
  children: JSX.Element | JSX.Element[]
}

export interface TimeframeProps {
  uniformNameHeight : number
}

export interface TimeframeNameProps {
  name: string;
  uniformNameHeight: number
}

export interface TimeframeGapProps {
spacing:number
}

