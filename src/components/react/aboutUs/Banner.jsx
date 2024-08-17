import { Image } from '@nextui-org/react';

const Banner = () => {
    return (
        <div className="relative w-full mt-4">
            {/* Fondo con color verde y ondas en la parte inferior */}
            <div className="w-full h-[70vw] sm:h-[60vw] md:h-[45vw] lg:h-[32.5vw] bg-green-800 bg-center relative px-4 sm:px-6 md:px-8 bottom-1 flex flex-col sm:flex-row items-center justify-between">
                {/* Texto */}
                <div className="text-left px-4 sm:px-6 md:px-12 max-w-xl sm:max-w-2xl mt-8 sm:mt-0 mb-8 sm:mb-0">
                    <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-white leading-snug transform translate-y-0 sm:-translate-y-1/2">
                        Somos un equipo de desarrolladores apasionados que hemos construido esta e-commerce desde cero, fusionando creatividad y tecnología para ofrecerte una experiencia de compra única y personalizada.
                    </p>
                </div>
                {/* Imagen Principal */}
                <div className="relative z-10 sm:absolute sm:right-1/4 sm:translate-y-10 -translate-y-0 transform translate-x-0 sm:translate-x-1/2 sm:mt-30 sm:bottom-32">
                    <Image
                        alt="Imagen publicitaria"
                        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-68 xl:h-68 2xl:w-76 2xl:h-76 rounded-full border-4 border-white shadow-lg"
                    />
                </div>

            </div>

            {/* Ondas en la parte inferior del fondo */}
            <div className="absolute bottom-0 w-full">
                <svg
                    className="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#f4f9f5"
                        d="M0,192 C360,32 1080,480 1440,220 L1440,320 L0,320 Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default Banner;