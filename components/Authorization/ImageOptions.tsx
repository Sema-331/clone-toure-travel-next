import Image from "next/image";
import React from "react";

interface ImageInt {
  image_title: string;
}

const ImageOptions = ({ image_title }: ImageInt) => {
  return <Image src={image_title} alt="login_options" />;
};

export default ImageOptions;
