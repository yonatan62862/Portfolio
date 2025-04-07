export default function ClickMeBtn(): JSX.Element {
    return (
        <div className="mt-6 flex justify-center animate-bounce">
            <p
                className=" text-zinc-800 dark:text-blue-600 font-bold rounded-full
        hover:scale-110 hover:shadow-lg transition-transform transform duration-300 ease-in-out
        focus:outline-none ml-4">
                See Details
            </p>
        </div>
    )
}