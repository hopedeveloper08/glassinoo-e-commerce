import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Zoom } from 'swiper/modules'
import 'swiper/css'

function GalleryItem({ item, submitHandler }) {
    const isDisabled = item?.is_disable ?? false;

    return (
        <div
            className={`
                card shadow border border-primary/20 bg-primary/3 relative
                ${isDisabled ? '[&>figure,p]:opacity-30' : 'hover:opacity-80 hover:shadow-primary hover:shadow-lg transition-all duration-200 hover:cursor-pointer'}
            `}
            onClick={() => isDisabled ? null : submitHandler(item)}
        >
            {isDisabled && (
                <button
                    className="btn btn-secondary btn-sm mx-5 py-8 absolute top-0 bottom-0 right-0 left-0 m-auto z-50"
                    onClick={() => submitHandler(item)}
                >
                    این طلق مناسب میز انتخابی شما نیست، در صورتی که این جنس طلق را میخواهید با رضایت خودتان کلیک کنید
                </button>
            )}
            <figure className="relative h-64 w-full overflow-hidden">
                {item.image_urls.length < 2 ? (
                    <img
                        src={item.image_urls[0]}
                        alt={item.title}
                        loading='lazy'
                        className="object-cover h-64 w-full"
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
                                    <img
                                        src={picture}
                                        alt={item.title}
                                        loading='lazy'
                                        className="object-cover h-64 w-full"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </figure>
            <p className="font-bold text-sm md:text-lg py-1">{item.title}</p>
        </div>
    )
}

export default GalleryItem