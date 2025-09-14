import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css'

import Image from 'next/image';

function SliderPictures() {
    const mobilePictures = [1, 2, 3, 4, 5].map((item) => `/images/header/mobile/${item}.jpg`)
    const desktopPictures = [1, 2, 3].map((item) => `/images/header/desktop/${item}.jpg`)

    const [pictures, setPictures] = useState(mobilePictures);

    useEffect(() => {
        const updatePictures = () => {
            if (window.innerWidth < 768) {
                setPictures(mobilePictures);
            } else {
                setPictures(desktopPictures);
            }
        };

        updatePictures();
        window.addEventListener("resize", updatePictures);

        return () => window.removeEventListener("resize", updatePictures);
    }, []);

    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            className="w-full h-full opacity-60"
        >
            {pictures.map(picture => (
                <SwiperSlide key={picture}>
                    <Image
                        src={picture}
                        className="w-full h-full object-cover"
                        alt='طلق رو میزی'
                        fill
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SliderPictures