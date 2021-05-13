type Themes = {
    title: string;
    isActive: boolean;
    color: string;
    serverTitle: string;
}

type VariableType = {
    id: number;
    title: string;
    isActive: boolean;
    isDisable?: boolean;
  };

export type { Themes, VariableType }