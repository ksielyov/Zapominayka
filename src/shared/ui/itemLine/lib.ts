export interface ItemLineInterface {
  title: string;
  likeCount: number;
  enabledTopBorder?: boolean;
  imageSource: string;
  onPress: () => void;
  likeMode?: true;
}
