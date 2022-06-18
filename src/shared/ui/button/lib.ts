export enum ButtonType {
  default = 'default',
}

export interface ButtonInterface {
  title: string;
  onPress: () => void;
  type?: ButtonType;
}
