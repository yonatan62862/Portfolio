import { useNavigate } from "react-router-dom";

type NavItemProps = {
    section: string;
    activeSection: string;
    onClick: () => void;
};

export default function NavItem({ section, activeSection, onClick }: NavItemProps): JSX.Element {
    const navigate = useNavigate();
    const isActive = activeSection === section;

    return (
        <li
            onClick={() => {
                onClick();
                navigate(`#${section}`);
                setTimeout(() => {
                    const element = document.getElementById(section);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100); 
            }}
            className={`relative cursor-pointer transition-all duration-300 
            ${isActive ? "text-zinc-800 font-bold  dark:text-dark-txt" : "text-gray-500 dark:text-dark-txt"} hover:text-gray-600`}
        >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            <span
                className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 transform transition-transform ease-out duration-500
                ${isActive ? "scale-x-100" : "scale-x-0"} origin-left`}
                style={{ width: "100%" }}
            />
        </li>
    );
}
