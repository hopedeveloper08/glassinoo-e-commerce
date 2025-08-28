import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css'

import pictures from '../utils/pictures'


export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-full opacity-60"
    >
      {pictures.map(picture => (
        <SwiperSlide key={picture}>
            <img
              src={picture}
              className="w-full h-full object-cover"
            />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
