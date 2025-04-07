import { useForm } from "react-hook-form"
import emailjs from 'emailjs-com';
import Input from "./Input";
import toast from "react-hot-toast";

const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export type ContactForm = {
    name: string;
    email: string;
    subject: string;
    content: string;
}

export default function ContactMeForm(): JSX.Element {
    const { handleSubmit, control, reset, formState: { isSubmitting } } = useForm<ContactForm>()
    const sendEmail = async (data: ContactForm) => {
        try {
            await emailjs.send(serviceID!, templateID!, data, publicKey!)
            toast.success('Your Message sent successfully!');
            reset();
        } catch (err: any) {
            toast.error('Failed to send message.');
            console.error(err);

        }
    }

    return (
    <div className="dark:bg-dark-third bg-gray-50 sm:w-1/2 w-full shadow-lg rounded-md p-8 px-10">
        <form onSubmit={handleSubmit(sendEmail)}>
            <Input
                control={control}
                name="Name"
                placeholder="Your Name"
                type="text"
                minLength={2}

            />
            <Input
                control={control}
                name="Email"
                placeholder="Your Email"
                type="email"
            />
            <Input
                control={control}
                name="Subject"
                placeholder="Hiring!"
                type="text"
                minLength={2}
            />
            <Input
                control={control}
                name="Message"
                placeholder="Your Message"
                type="textarea"
                minLength={3}
            />
            <div className="text-center">
                <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors duration-300"
                >
                    {isSubmitting ? "Sending..." : "Send"}
                </button>
            </div>
        </form>
    </div>
    )
}