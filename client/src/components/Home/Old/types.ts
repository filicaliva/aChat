type setClassType = {
    bool: boolean;
    cssClass: string;
  };
  
  type GenderType = {
    personal: boolean;
  };
  
  type initGenderType = {
    variable: Array<VariableType>;
    personal: boolean;
  };
  
  type VariableType = {
    id: number;
    title: string;
    isActive: boolean;
    isDisable?: boolean;
  };
  
  export type { setClassType, GenderType, initGenderType, VariableType };
  