import { useEffect } from "react";
import SocialButtons from "./SocialButtons";
import homePageMemoji from "../../assets/images/homePageMemoji.png";
import Typed from "typed.js";

export default function HomePage(): JSX.Element {
    useEffect(() => {
        const options = {
            strings: ['looking for my next challenge!'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        };

    const typed = new Typed('.typing', options);
        return () => {
            typed.destroy();
        };

    }, []);

    return (
        <section id="hero" className=" relative min-h-screen flex flex-col justify-center items-center  dark:bg-dark-main dark:text-dark-txt lg:p-20 md:p-8 sm:p-2" data-aos="fade-in">
            <div className="dark:bg-dark-second container mx-auto text-center rounded-xl">
                <div className="relative rounded-xl">
                    <img
                        className="mx-auto h-60 w-60 transition-transform duration-500 hover:scale-110 hover:rotate-2"
                        src={homePageMemoji}
                        alt="Yonatan Cohen"
                    />

                    <div className="mt-8 flex flex-col items-center gap-6">
                        <h1 className="text-5xl font-extrabold leading-tight text-gray-800 dark:text-white font-raleway" data-aos="fade-up">
                            Hello, I'm <span className="text-blue-600 dark:text-blue-600">Yonatan Cohen</span>.
                        </h1>

                        <h2 className="lg:text-2xl text-gray-700 dark:text-gray-300">
                           And I'm <span className="typing font-bold text-blue-600 dark:text-blue-600"></span>
                        </h2>
                        <div data-aos="fade-right">
                        <p className="text-xl mb-3 text-gray-800 dark:text-gray-200 font-bold tracking-wide">

                                Let's connect!
                            </p>
                            <SocialButtons />
                        </div>
                    </div>

                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                        <div className="w-72 h-72 bg-gradient-to-r from-green-400 to-blue-300 rounded-full opacity-10 blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}