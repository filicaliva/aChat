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

type ContainerOptionType = {
  personal_title: string;
  find_title: string;
  isGender: boolean;
  personalState: Array<VariableType>;
  findState: Array<VariableType>;
};

type findChangeActiveType = {
  type: string;
  payload: any;
};

export type { setClassType, GenderType, findChangeActiveType, initGenderType, VariableType, ContainerOptionType };
