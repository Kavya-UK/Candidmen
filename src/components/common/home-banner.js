import React from 'react'
import { useTranslation } from "react-i18next";

import { bannerImage } from '../../data/home/imagesLink';

const ImageComponent = ({imgSrc}) => {
    return (
      <img
        src={require(`../../${imgSrc}`)}
        alt={"leftEnd"}
        className="object-contain h-full w-full"
      />
    );
}
export default function HomeBanner() {
  const { t } = useTranslation();
  return (
    <div className="h-full py-[10px] flex items-center justify-center">
      <div className="relative left-[8%] z-2 h-[60%]">
        <ImageComponent imgSrc={bannerImage.leftEnd} />
      </div>
      <div className="relative left-[5%] h-[70%]">
        <ImageComponent imgSrc={bannerImage.leftCenter} />
      </div>
      <div className="relative z-40 h-[90%]">
        <ImageComponent imgSrc={bannerImage.centerImage} />
      </div>
      <div className="relative right-[5%] z-20 h-[70%]">
        <ImageComponent imgSrc={bannerImage.rightCenter} />
      </div>
      <div className="relative right-[8%] h-[60%]">
        <ImageComponent imgSrc={bannerImage.rightEnd} />
      </div>
    </div>
  );
}
