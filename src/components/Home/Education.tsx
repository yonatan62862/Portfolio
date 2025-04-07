import student from '../../assets/images/student.png';

export default function Education(): JSX.Element {

  return (
    <section
      className="lg:p-20 p-5 bg-gray-50 dark:bg-dark-main"
      id="education"
    >
      <div className="lg:container mx-auto">
        <h2 className="mb-10 text-center font-header text-4xl font-thin uppercase text-zinc-800 dark:text-blue-600 sm:text-5xl lg:text-6xl">
          My Education
        </h2>
        <div className="lg:w-2/3 mx-auto">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-16">
                    
                    <div className="lg:w-1/2">
                        <p className="mb-3 text-left font-header text-4xl font-med uppercase text-zinc-800 dark:text-white sm:text-5xl lg:text-2xl">
                        2022 - 2025
                        </p>
                        <p className="mb-3 text-left font-header text-4xl font-med uppercase text-zinc-800 dark:text-white sm:text-5xl lg:text-2xl">
                        B.Sc. in Computer Science (Internship - Full Stack Development)
                        </p>
                        <p className="mb-3 text-left font-header text-4xl font-med uppercase text-zinc-800 dark:text-white sm:text-5xl lg:text-2xl">
                        College of Management Academic Studies, Israel
                        </p>
                    </div>
                <div className="lg:w-1/2 flex justify-center -mt-20">
                        <img
                            src={student}
                            alt="About me illustration"

                        />
                    </div>
              </div>
            </div>
          </div>
    </section>
  );
};
