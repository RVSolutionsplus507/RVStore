import React from 'react';
import servicio from '../../public/servicio.webp';
import servicio1 from '../../public/servicio1.webp';
import servicio2 from '../../public/servicio2.webp';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Home = () => {
    return (
        <div className="container mx-auto py-2">
            <h1 className="text-4xl font-bold text-center">Home</h1>
            <div className="mx-auto w-8/12">
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <img src={servicio1} alt="Image" className="rounded-xl object-cover" />
                        </CarouselItem>
                        <CarouselItem>
                            <img src={servicio1} alt="Image" className="rounded-xl object-cover" />
                        </CarouselItem>
                        <CarouselItem>
                            <img src={servicio1} alt="Image" className="rounded-xl object-cover" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="cover"></div>
        </div>
    );
};

export default Home;