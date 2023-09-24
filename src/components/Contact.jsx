import { social } from "../constants"
import logo from "../assets/logo.png"
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [emailSent, setEmailSent] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const { name, email, message } = formData;
        const subject = `Portfolio Contact Form Submission from ${name}`;
        const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

        // Compose the mailto URL
        const mailtoURL = `mailto:mohamedprof228@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        // Open the user's default email client with the mailto URL
        window.location.href = mailtoURL;
        setFormData({
            name: '',
            email: '',
            message: '',
        })
        setEmailSent(true)
    };
    return (
        <section id="contact" className="bg-[#032324] pt-24 sm:pt-40 text-gray-300 overflow-hidden  ">
            <div className="rounded-t-[100px] min-h-[500px] bg-[#0A4F51] bg-gradient-to-r from-[#2c6f74] to-[#026468] relative p-10">
                <div className=" container mx-auto p-4">
                    <div className="w-48 h-48 sm:w-80 sm:h-80 top-0 left-0 rounded-full -translate-y-1/2 absolute -translate-x-1/2 opacity-30 bg-[#2aa2a7]" />
                    <div className="w-48 h-48 sm:w-80 sm:h-80 top-0 right-0 rounded-full -translate-y-1/2 absolute translate-x-1/2 opacity-30 bg-[#2aa2a7]" />
                    <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-[#40dcdf] text-center">Contact</h2>
                    <div className="lg:hidden">
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#33afb1] mt-8">Drop Me a Message</h3>
                        <p className="mt-2 p-2">For inquiries or opportunities, feel free to reach out.</p>
                    </div>
                    <div className="flex max-lg:flex-col-reverse lg:gap-20">
                        <div className="lg:basis-1/2 lg:p-4">
                            <div className="max-lg:hidden">
                                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#33afb1] mt-8">Drop Me a Message</h3>
                                <p className="max-w-md mt-4 p-2">For inquiries or opportunities, feel free to reach out.</p>
                            </div>
                            <div className="flex max-lg:flex-col items-center">
                                <ul className="basis-1/2 flex-1 mt-8 flex  lg:flex-col gap-4 max-lg:justify-center flex-wrap">
                                    {social.map((elm, id) => <li key={id}>
                                        <a target="_blank" rel="noreferrer" href={elm.link} className="inline-block bg-gradient-to-r rounded-lg from-[#285c5c] to-[#0b6668] gap-4 p-2">
                                            <img className="w-10" src={elm.icon} alt="" />
                                        </a>
                                    </li>)}
                                </ul>
                                <div className="basis-1/2 flex-1 flex flex-col items-center">
                                    <img className="max-w-[250px] w-full" src={logo} alt="" />
                                    <p className="text-3xl font-black"><span className="text-[#40DCDF]">Mohamed</span> Zoraa</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:basis-1/2 lg:p-20">
                            <form onSubmit={handleFormSubmit} className="hide duration-700 transition-[opacity,transform] p-10 mt-8 bg-gradient-to-l from-[#2c6f74] to-[#026468] space-y-4 rounded-3xl">
                                <input
                                    type="text"
                                    className="w-full text-lg bg-[#0d3536] pl-4 pr-2 py-2 rounded-md outline-none text-gray-200"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    className="w-full text-lg bg-[#0d3536] pl-4 pr-2 py-2 rounded-md outline-none text-gray-200"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <textarea
                                    className="w-full h-24 bg-[#0d3536] pl-4 pr-2 py-2 rounded-md outline-none text-gray-200 resize-none"
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                                <button
                                    type="submit"
                                    className="text-gray-200 px-10 py-2 mt-4 block rounded-md text-lg font-bold bg-gradient-to-r to-[#029699] from-[#1b7475] relative z-0"
                                >
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-200 w-full h-full bg-[#ffffff30] z-10" />
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                    {emailSent
                        && <div className="fixed w-full max-md:px-4 h-full top-0 left-0 flex justify-center items-center bg-[#00000080]">
                            <div className=" w-full md:w-2/3 bg-gray-100 grid place-items-center p-10 rounded-xl text-gray-700 font-medium">
                                <div>
                                    <p >Thank you for reaching out!. I&apos;ll get back to you as soon as possible. In the meantime, feel free to explore more of my portfolio.</p>
                                    <p>If you encounter any issues, don&apos;t hesitate to reach out to me directly at <a className="underline text-blue-600" href="mailto:mohamedprof228@gmail.com">mohamedprof228@gmail.com</a>.</p>
                                    <p className="text-xl text-pink-600 font-semibold mt-4">Have a great day!</p>
                                    <button onClick={() => setEmailSent(false)} className="bg-red-500 mt-4 ms-auto px-8 py-2 block text-white font-semibold rounded-lg">Close</button>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        </section>
    )
}

export default Contact