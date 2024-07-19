import Image from "next/image";
import React from "react";

interface ImageInt {
  image: string;
  width: number;
  height: number;
}

const ImageUserComponent = ({ image, width, height }: ImageInt) => {
  return (
    <Image
      width={width}
      height={height}
      className="image__change"
      src={image}
      alt=""
    />
  );
};

export default ImageUserComponent;
