import React from "react";
import Image from "next/image";
import Link from "next/link";

export type Props = {
  buttonDataList: ButtonData[];
};

export type ButtonData = {
  title: string;
  link: string;
  src: string;
  alt: string;
};

const generateButtons = (buttonDataList: ButtonData[]) => {
  const output = buttonDataList?.map((buttonData) => {
    return (
      <Link href={buttonData.link}>
        <Image
          src={buttonData.src}
          alt={buttonData.alt}
          className="dark:invert"
          width={40}
          height={10}
        ></Image>
        <span className="btm-nav-label font-bold">{buttonData.title}</span>
      </Link>
    );
  });
  return output;
};

export const ButtomNav: React.FC<Props> = ({ buttonDataList }) => {
  return <div className="btm-nav py-10">{generateButtons(buttonDataList)}</div>;
};
