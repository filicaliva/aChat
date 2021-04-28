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
  variables: any;
  storagePersonal: number;
  storageFind: Array<number>;
  storageAccess: string;
}

type findChangeActiveType = {
  type: string;
  payload: any;
};

export type { setClassType, GenderType, findChangeActiveType, initGenderType, VariableType, ContainerOptionType };
