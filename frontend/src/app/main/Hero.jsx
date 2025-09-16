import { Link } from "react-router";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css'

import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";

function Hero() {
    const pictures = window.innerWidth < 768 ? [1, 2, 3, 4, 5].map(item => `/images/mobile-background/${item}.webp`) : [1, 2, 3].map(item => `/images/desktop-background/${item}.webp`)

    return (
        <div className="hero w-full h-screen">

            {/* slider */}
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
                            alt='طلق رو میزی'
                            loading='lazy'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* content */}
            <div className="hero-content text-base-content text-center z-10">
                <div className="max-w-md">
                    <img
                        src="/images/header-logo.webp"
                        alt="گلاسینو"
                        loading='lazy'
                        width={128}
                        height={128}
                        className="mx-auto"
                    />
                    <h1 className="mb-5 text-5xl font-bold text-base-content/85">طلق رو میزی</h1>
                    <p className="mb-2 md:text-lg">
                        با گلاسینو، میزتان همیشه مثل روز اول شیک، درخشان و زیبا می‌ماند.
                        طلق رو میزی مقاوم، دقیقاً مطابق سلیقه و میز شما
                    </p>
                    <Link to='/order/' >
                        <button className="btn btn-primary btn-lg animate-bounce mt-3">
                            <HiMiniArrowRightEndOnRectangle size={20} />
                            شروع سفارش
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero