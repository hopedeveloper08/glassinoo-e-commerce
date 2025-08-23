import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { Link } from 'react-router-dom'
import SocialMedia from '../../base/navbar/components/SocialMedia'

export default function Header() {
  const mobliePictures = [1, 2, 3, 4, 5, 6, 7]
  const desktopPictures = [1, 2, 3]

  const isMobile = window.innerWidth < 768
  const baseUrl = isMobile ? '/header/mobile/' : '/header/desktop/'
  const pictures = isMobile ? mobliePictures : desktopPictures

  return (<>
    <div className="hero h-[calc(100vh-4rem)]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full max-md:h-full opacity-70"
      >
        {pictures.map(id => (
          <SwiperSlide key={id}>
            <img
              src={`${baseUrl}${id}.jpg`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral text-center z-100">
        <div className="max-w-md">
          <img src='/logo.png' alt='گلاسینو' className='mx-auto' width={120} />
          <h1 className="mb-5 text-5xl font-bold">طلق رو میزی</h1>
          <p className="mb-2">
            با گلاسینو، میزتان همیشه مثل روز اول شیک و درخشان می‌ماند.
            طلق رو میزی مقاوم، دقیقاً مطابق سلیقه و میز شما
          </p>
          <div className="flex justify-center mb-5 gap-2 md:hidden">
            <SocialMedia size={32} key={2} />
          </div>
          <Link to={'/order/'} >
            <button className="btn btn-primary">شروع سفارش</button>
          </Link>
        </div>
      </div>
    </div >
  </>)
}
