import { scrollToSection } from "../../Utils/ScrollToSection";
import Service from "./Service";
import Skills from "./Skills";

export default function Services(): JSX.Element {
    const services = [
        {
            title: "Web Development",
            content: "Delivering robust front-end and back-end solutions tailored to your needs.",
            icon: (
                <svg
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 399.997 399.997"
            className="w-8 h-8" 
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <g>
                        <g>
                            <path d="M281.547,143.478c-0.456-2.581-2.917-4.305-5.501-3.851l-17.05,3.005c-2.047-4.803-4.662-9.302-7.764-13.418 l11.139-13.272c0.809-0.965,1.201-2.211,1.094-3.466c-0.111-1.256-0.715-2.414-1.68-3.225l-14.913-12.514 c-0.964-0.809-2.213-1.202-3.468-1.093c-1.254,0.109-2.413,0.714-3.224,1.678l-11.13,13.265c-4.566-2.326-9.45-4.123-14.57-5.306 V87.969c0-2.624-2.125-4.751-4.748-4.751h-19.466c-2.622,0-4.748,2.127-4.748,4.751v17.312 c-5.122,1.183-10.004,2.979-14.572,5.306l-11.128-13.265c-1.688-2.008-4.682-2.271-6.69-0.584l-14.913,12.513 c-0.966,0.811-1.568,1.969-1.68,3.225c-0.107,1.255,0.284,2.501,1.094,3.466l11.138,13.272 c-3.102,4.116-5.716,8.617-7.763,13.418l-17.05-3.005c-2.579-0.454-5.045,1.27-5.501,3.851l-3.381,19.173 c-0.218,1.24,0.064,2.519,0.788,3.549c0.722,1.032,1.823,1.733,3.064,1.951l17.063,3.011c0.277,5.284,1.197,10.398,2.68,15.268 l-14.994,8.657c-1.092,0.631-1.886,1.665-2.213,2.882c-0.325,1.219-0.154,2.514,0.475,3.604l9.733,16.86 c0.63,1.092,1.667,1.886,2.885,2.212c0.403,0.109,0.816,0.163,1.229,0.163c0.826,0,1.645-0.216,2.373-0.638l15.009-8.664 c3.533,3.776,7.518,7.127,11.868,9.967l-5.926,16.277c-0.43,1.184-0.375,2.489,0.158,3.631c0.533,1.142,1.496,2.022,2.68,2.455 l18.294,6.658c0.524,0.19,1.075,0.286,1.625,0.286c0.686,0,1.371-0.149,2.005-0.444c1.142-0.532,2.025-1.496,2.456-2.681 l5.925-16.278c2.54,0.307,5.127,0.469,7.75,0.469s5.21-0.162,7.75-0.469l5.926,16.278c0.432,1.185,1.313,2.146,2.455,2.681 c0.636,0.295,1.318,0.444,2.007,0.444c0.549,0,1.101-0.097,1.623-0.286l18.295-6.658c1.185-0.433,2.146-1.313,2.681-2.457 c0.532-1.142,0.588-2.445,0.157-3.629l-5.927-16.277c4.352-2.84,8.335-6.188,11.868-9.967l15.009,8.664 c0.729,0.422,1.547,0.637,2.373,0.637c0.412,0,0.826-0.053,1.229-0.162c1.218-0.326,2.253-1.12,2.884-2.212l9.732-16.86 c0.631-1.089,0.802-2.385,0.477-3.604c-0.327-1.217-1.123-2.253-2.213-2.882l-14.994-8.657c1.48-4.87,2.402-9.983,2.68-15.268 l17.063-3.011c1.241-0.218,2.341-0.919,3.062-1.951c0.726-1.031,1.006-2.309,0.788-3.549L281.547,143.478z M200,193.117 c-14.424,0-26.117-11.692-26.117-26.116c0-14.424,11.693-26.116,26.117-26.116s26.117,11.692,26.117,26.116 C226.117,181.425,214.424,193.117,200,193.117z"></path>
                            <path d="M366.684,24.971H33.316C14.945,24.971,0,39.917,0,58.288V275.56c0,18.371,14.945,33.317,33.316,33.317h107.412 l-20.387,44.955c-2.105,4.643-1.709,10.037,1.053,14.321c2.762,4.285,7.51,6.873,12.607,6.873h131.996c0,0,0.014,0,0.02,0 c8.285,0,15-6.715,15-15c0-2.493-0.605-4.848-1.686-6.916l-20.062-44.233h107.412c18.371,0,33.316-14.946,33.316-33.317V58.288 C400,39.917,385.055,24.971,366.684,24.971z M370,275.561c0,1.829-1.488,3.316-3.316,3.316H33.316 c-1.828,0-3.316-1.487-3.316-3.316V58.288c0-1.829,1.488-3.317,3.316-3.317h333.367c1.828,0,3.316,1.488,3.316,3.317L370,275.561 L370,275.561z"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
            ),

        },
        {
            title: "Mobile Development",
            content: "Creating intuitive, high-performance mobile applications that provide seamless user experiences across all devices.",
            icon: <svg
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32.00 32.00"
            fill="#000000"
            className="w-8 h-8" 
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <style type="text/css">
                    {`
                        .st0 {
                            fill: none;
                            stroke: #000000;
                            stroke-width: 2;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-miterlimit: 10;
                        }
                    `}
                </style>
                <path d="M19,8c0.6,0,1-0.4,1-1V5c0-1.7-1.3-3-3-3H7C5.3,2,4,3.3,4,5v22c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3v-4c0-0.6-0.4-1-1-1H6V8 H19z M11,25h2c0.6,0,1,0.4,1,1s-0.4,1-1,1h-2c-0.6,0-1-0.4-1-1S10.4,25,11,25z"></path>
                <g>
                    <path d="M14,19c-0.3,0-0.5-0.1-0.7-0.3l-3-3c-0.4-0.4-0.4-1,0-1.4l3-3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L12.4,15l2.3,2.3 c0.4,0.4,0.4,1,0,1.4C14.5,18.9,14.3,19,14,19z"></path>
                </g>
                <g>
                    <path d="M24,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l2.3-2.3l-2.3-2.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3,3 c0.4,0.4,0.4,1,0,1.4l-3,3C24.5,18.9,24.3,19,24,19z"></path>
                </g>
                <g>
                    <path d="M17,20c-0.1,0-0.3,0-0.4-0.1c-0.5-0.2-0.7-0.8-0.4-1.3l4-8c0.2-0.5,0.8-0.7,1.3-0.4c0.5,0.2,0.7,0.8,0.4,1.3l-4,8 C17.7,19.8,17.4,20,17,20z"></path>
                </g>
            </g>
        </svg>
        },

        {
            title: "API Development",
            content: "Building secure and efficient APIs to connect your applications seamlessly.",
            icon: <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="w-10 h-10" 
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M21.3,19a2.42,2.42,0,0,1-2.5.56l-2.35,2.35a.34.34,0,0,1-.49,0l-1-1a.36.36,0,0,1,0-.49l2.36-2.35a2.39,2.39,0,0,1,3.39-2.91L19.12,16.8l1,1,1.62-1.62A2.39,2.39,0,0,1,21.3,19ZM22,8v5.76A4.47,4.47,0,0,0,19.5,13a4.57,4.57,0,0,0-1.29.19V9.29H16.66V14A4.5,4.5,0,0,0,15,17.5a4.07,4.07,0,0,0,0,.5H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H20A2,2,0,0,1,22,8ZM11,15,9.09,9.27H7L5.17,15h1.7l.29-1.07H9L9.29,15Zm4.77-3.89a1.67,1.67,0,0,0-.55-1.35,2.43,2.43,0,0,0-1.62-.47h-2V15h1.54V13.11h.44a2.75,2.75,0,0,0,1-.17,1.82,1.82,0,0,0,.67-.44,1.63,1.63,0,0,0,.36-.64A2.36,2.36,0,0,0,15.75,11.11Zm-7.3.62-.12-.44-.15-.58c0-.21-.08-.37-.11-.5a4.63,4.63,0,0,1-.1.48c0,.19-.08.38-.13.57s-.08.34-.12.47l-.24.93H8.69Zm5.59-1a.63.63,0,0,0-.5-.17h-.4v1.31h.31a.9.9,0,0,0,.37-.07.59.59,0,0,0,.27-.22.75.75,0,0,0,.11-.42A.57.57,0,0,0,14,10.71Z"></path>
                <rect width="24" height="24" fill="none"></rect>
            </g>
        </svg>
        },

        {
            title: "Database Management",
            content: "Optimizing data storage and retrieval for better performance and scalability.",
            icon: <svg fill="#000000" className="w-12 h-12" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>database</title> <path d="M4 26.016q0 1.632 1.6 3.008t4.384 2.176 6.016 0.8 6.016-0.8 4.384-2.176 1.6-3.008v-3.392q0 1.632-1.632 2.88t-4.32 1.856-6.048 0.64-6.048-0.64-4.32-1.856-1.632-2.88v3.392zM4 20q0 1.632 1.6 3.008t4.384 2.208 6.016 0.8 6.016-0.8 4.384-2.208 1.6-3.008v-3.36q0 1.6-1.632 2.848t-4.32 1.888-6.048 0.64-6.048-0.64-4.32-1.888-1.632-2.848v3.36zM4 14.016q0 1.632 1.6 3.008t4.384 2.176 6.016 0.8 6.016-0.8 4.384-2.176 1.6-3.008v-3.392q0 1.632-1.632 2.88t-4.32 1.856-6.048 0.64-6.048-0.64-4.32-1.856-1.632-2.88v3.392zM4 8q0 1.632 1.6 3.008t4.384 2.208 6.016 0.8 6.016-0.8 4.384-2.208 1.6-3.008v-1.984q0-1.632-1.6-3.008t-4.384-2.176-6.016-0.832-6.016 0.832-4.384 2.176-1.6 3.008v1.984z"></path> </g></svg>
        },

    ]


    return (
        <section id="services" className="dark:bg-dark-main sm:p-10 lg:p-20 p-10">
            <h2 className="text-center font-header text-4xl font-thin uppercase text-zinc-800 dark:text-green-400 sm:text-5xl lg:text-6xl">
            My Services
            </h2>
            <div className="sm:container mx-auto mt-4">
                <div className="sm:grid grid-cols-2 gap-8">
                    {services.map(({ content, icon, title }, index) =>
                        <Service
                            key={index}
                            title={title}
                            content={content}
                            icon={icon}
                        />)}
                </div>
                <Skills />
                <div className="text-center mt-8">
                    <p className="text-gray-600 dark:text-gray-300">Ready to take your project to the next level? </p>
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, "contact")}
                        className="mt-4 inline-block px-6 py-2 text-white dark:text-dark-txt bg-blue-600 hover:bg-blue-500 rounded transition duration-300"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}