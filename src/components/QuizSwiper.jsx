import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import IntroSlide from "./IntroSlide";
import Quiz from "./Quiz";

export default function QuizSwiper() {
  const [swiper, setSwiper] = useState(null);
  const [introKey, setIntroKey] = useState(0);

  const goToIntro = () => {
    setIntroKey((prev) => prev + 1);
    swiper?.slideTo(0);
  };

  return (
    <Swiper slidesPerView={1} allowTouchMove onSwiper={setSwiper}>
      <SwiperSlide>
        <IntroSlide key={introKey} />
      </SwiperSlide>

      <SwiperSlide>
        <Quiz swiper={swiper} goToIntro={goToIntro} />
      </SwiperSlide>
    </Swiper>
  );
}
