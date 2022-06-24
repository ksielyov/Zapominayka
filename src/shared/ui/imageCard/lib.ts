export interface ImageCardInterface {
  bottom?: number;
  index: number;
  imageSource: string;
  onImageLoad?: () => void;
  testID?: string;
  onPress?: () => void;
}
