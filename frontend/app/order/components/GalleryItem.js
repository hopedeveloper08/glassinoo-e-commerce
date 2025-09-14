import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Zoom } from 'swiper/modules'
import 'swiper/css'

import Image from 'next/image'

export default function GalleryItem({ item, submitHandler }) {
    return (
        <button
            className="card border-1 border-gray-200 shadow-sm hover:opacity-80 hover:shadow-secondary hover:shadow-xl transition duration-300 hover:cursor-pointer"
            onClick={() => submitHandler(item)}
        >
            <figure className="relative h-64 w-full overflow-hidden">
                {item.image_urls.length < 2 ? (
                    <Image
                        src={item.image_urls[0]}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <Swiper
                        modules={[Autoplay, Zoom]}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        zoom={true}
                        slidesPerView={1}
                        className="w-full h-64"
                    >
                        {item.image_urls.map((picture, index) => (
                            <SwiperSlide zoom={true} key={`${picture}-${index}`}>
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={picture}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </figure>
            <p className="font-bold text-sm md:text-lg py-1">{item.title}</p>
        </button>
    )
}
