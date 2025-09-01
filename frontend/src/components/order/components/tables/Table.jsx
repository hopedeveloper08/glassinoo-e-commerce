import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Zoom } from 'swiper/modules';
import 'swiper/css'

export default function Table({ table, submitHandler }) {
  return (
    <button className="card border-1 border-gray-200 shadow-sm hover:opacity-90 hover:shadow-2xl transition duration-300" onClick={() => submitHandler(table)} key={table.id}>
      <figure className='h-64'>
        <Swiper
          modules={[Autoplay, Zoom]}
          autoplay={{ delay: 3000 }}
          loop
          zoom={true}
          className='w-full h-64'
        >
          {table.image_urls.map(picture => (
            <SwiperSlide zoom={true} key={picture}>
              <img src={picture} alt={table.title} loading="lazy" className="object-fill w-full h-64 mx-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </figure>
      <p className="font-bold text-sm md:text-lg py-1">{table.title}</p>
    </button>
  )
}
