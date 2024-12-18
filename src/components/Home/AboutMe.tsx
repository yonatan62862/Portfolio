import aboutMemoji from '../../assets/images/aboutMemoji.png';


export default function AboutMe(): JSX.Element {
    return (
        <>
            <section className="lg:p-20 p-5 bg-gray-50 dark:bg-dark-main" id="about">
            <div className="lg:container mx-auto">
                <h2 className="mb-10 text-center font-header text-4xl font-thin uppercase text-zinc-800 dark:text-green-400 sm:text-5xl lg:text-6xl">
                    Who Am I?
                </h2>
                </div>

                <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-16">
                    
                    <div className="lg:w-1/2">
                        <p className="mb-3 text-left font-header text-4xl font-med uppercase text-zinc-800 dark:text-green-400 sm:text-5xl lg:text-2xl">
                        Hi, I'm Yonatan Cohen - a software developer, computer scientist, 
                        and full stack web developer with a passion for creating innovative,
                        efficient, and user-friendly web solutions.
                        </p>
                        <p className="mb-3 text-left font-header text-4xl font-med uppercase text-zinc-800 dark:text-green-400 sm:text-5xl lg:text-2xl">
                        I specialize in building scalable applications using technologies including
                        React.js, Node.js, and MongoDB, ensuring clean design and high performance.
                        </p>
                        <p className="mb-3 text-left font-header text-4xl font-med uppercase text-zinc-800 dark:text-green-400 sm:text-5xl lg:text-2xl">
                        With a strong ability to learn and adapt quickly, I'm happy to take on new challenges
                        and stay ahead of the ever-evolving technology landscape.
                        </p>
                        <p className="mb-3 text-left font-header text-4xl font-med uppercase text-zinc-800 dark:text-green-400 sm:text-5xl lg:text-2xl">
                        As a collaborative team player, I'm committed to delivering quality products that bring real value to users and businesses alike.
                        If you've made it this far, explore my portfolio!
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center -mt-20">
                        <img
                            src={aboutMemoji}
                            alt="About me illustration"

                        />
                    </div>
                </div>
            </section>
        </>
    );
}