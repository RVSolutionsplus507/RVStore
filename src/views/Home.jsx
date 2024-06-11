import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Brands from '@/components/Brands';
import Hero from '@/components/Hero';


const Home = () => {
    return (
        <div className="container mx-auto">
            <Hero />
            <div className="mx-auto w-8/12">
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <img src="https://i.ibb.co/JCWPyLd/webdev4.webp" alt="WebDev" className="w-full rounded-xl object-contain" />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <img src="https://i.ibb.co/JCWPyLd/webdev4.webp" alt="TechSupport" className="w-full rounded-xl object-contain" />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <img src="https://i.ibb.co/JCWPyLd/webdev4.webp" alt="Apps" className="w-full rounded-xl object-contain" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="flex justify-center">
                <div className="w-8/12">
                    <Brands />
                </div>
            </div>
        </div>
    );
};

export default Home;