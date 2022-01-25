import { CSSProperties } from "react";

export interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  onLoad?: () => void;
  style?: CSSProperties;
}
