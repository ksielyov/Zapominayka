export enum InputType {
  default = 'default',
}

export enum VerticalAlign {
  center = 'center',
}

export interface InputInterface {
  placeholder: string;
  type?: InputType;
  verticalAlign?: VerticalAlign;
}
