import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Zoom } from 'swiper/modules';
import 'swiper/css'

export default function GalleryItem({ item, submitHandler }) {
  return (
    <button className="card border-1 border-gray-200 shadow-sm hover:opacity-80 hover:shadow-secondary hover:shadow-xl transition duration-500" onClick={() => submitHandler(item)}>
      <figure className='h-64'>
        {item.image_urls.length < 2 ? <img src={item.image_urls[0]} alt={item.title} className="object-fill w-full h-64 mx-auto" /> :
          <Swiper
            modules={[Autoplay, Zoom]}
            autoplay={{ delay: 3000 }}
            loop={true}
            zoom={true}
            slidesPerView={1}
            className='w-full h-64'
          >
            {item.image_urls.map((picture, index) => (
              <SwiperSlide zoom={true} key={`${picture}-${index}`}>
                <img src={picture} alt={item.title} loading="lazy" className="object-fill w-full h-64 mx-auto" />
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </figure>
      <p className="font-bold text-sm md:text-lg py-1">{item.title}</p>
    </button>
  )
}
