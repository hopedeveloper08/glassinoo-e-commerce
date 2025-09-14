import Link from 'next/link'
import Image from 'next/image';

import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";

function HeroContent() {
    return (
        <div className="hero-content text-base-content text-center z-10">
            <div className="max-w-md">
                <Image
                    src="/images/logo.png"
                    alt="گلاسینو"
                    width={128}
                    height={128}
                    className="mx-auto"
                    sizes='128px'
                />
                <h1 className="mb-5 text-5xl font-bold">طلق رو میزی</h1>
                <p className="mb-2">
                    با گلاسینو، میزتان همیشه مثل روز اول شیک، درخشان و زیبا می‌ماند.
                    طلق رو میزی مقاوم، دقیقاً مطابق سلیقه و میز شما
                </p>
                <Link href='/order/' >
                    <button className="btn btn-primary btn-lg animate-bounce mt-3">
                        <HiMiniArrowRightEndOnRectangle size={20} />
                        شروع سفارش
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HeroContent