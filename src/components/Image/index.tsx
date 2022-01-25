import { FC } from "react";
import { ImageProps } from "../../types/Image";

const Image: FC<ImageProps> = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt || ""}
      className={props.className ? props.className : ""}
      style={{ ...props.style }}
    />
  );
};

export default Image;