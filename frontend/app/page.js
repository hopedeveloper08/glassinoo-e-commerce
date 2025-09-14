"use client";

import HeroContent from './components/hero/HeroContent';
import SliderPictures from './components/hero/SliderPictures';

export default function Home() {
    return (
        <div className="hero w-full h-screen">
            <SliderPictures />
            <HeroContent />
        </div>
    );
}
