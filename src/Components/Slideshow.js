import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

import img_a3 from "../logos/banner/a3.jpg";
import img_a2 from "../logos/banner/a2.jpg";
import img_a1 from "../logos/banner/a1.jpg";

const Slideshow = () => {
  const images = [{ url: img_a3 }, { url: img_a2 }, { url: img_a1 }];

  return (
    <>
      <div>
        <SimpleImageSlider
          width={1350}
          height={510}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>
    </>
  );
};

export default Slideshow;
