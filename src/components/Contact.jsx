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
        const emailBody = `Name: ${name}\nEmail: ${email}\n${message}`;

        // Compose the mailto URL
        const mailtoURL = `mailto:mohamedzoraa100@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

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
        <section id="contact" className="bg-[#032324] pt-24 sm:pt-32 text-gray-300 overflow-hidden">
            <div className="rounded-t-[60px] md:rounded-t-[100px] min-h-[500px] bg-gradient-to-br from-[#0A4F51] via-[#0d5a5c] to-[#0A4F51] relative py-16 px-6 md:px-10">
                {/* Background decorations */}
                <div className="w-40 h-40 sm:w-72 sm:h-72 top-0 left-0 rounded-full -translate-y-1/2 absolute -translate-x-1/2 bg-[#40dcdf] opacity-10 blur-3xl" />
                <div className="w-40 h-40 sm:w-72 sm:h-72 top-0 right-0 rounded-full -translate-y-1/2 absolute translate-x-1/2 bg-[#309092] opacity-10 blur-3xl" />
                
                <div className="container mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center space-y-4 mb-12">
                        <span className="text-[#6dd5d7] text-sm md:text-base font-semibold tracking-widest uppercase">Get in touch</span>
                        <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold gradient-text">Contact Me</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#309092] to-[#40dcdf] rounded-full mx-auto" />
                    </div>
                    
                    <div className="flex max-lg:flex-col-reverse gap-12 lg:gap-20">
                        {/* Left side - Info */}
                        <div className="lg:basis-1/2 space-y-8">
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Let&apos;s Work Together</h3>
                                <p className="text-gray-400 text-lg">For inquiries or opportunities, feel free to reach out. I&apos;m always excited to discuss new projects.</p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row items-center gap-8">
                                {/* Social links */}
                                <ul className="flex gap-4">
                                    {social.map((elm, id) => (
                                        <li key={id}>
                                            <a target="_blank" rel="noreferrer" href={elm.link} className="group flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#1a5f61] to-[#0d3536] border border-[#30909240] hover:border-[#40dcdf] hover:shadow-lg hover:shadow-[#30909040] transition-all duration-300">
                                                <img className="w-7 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" src={elm.icon} alt={elm.text} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                
                                {/* Logo & name */}
                                <div className="flex flex-col items-center">
                                    <img className="w-24 opacity-80" src={logo} alt="Logo" />
                                    <p className="text-xl font-bold mt-2"><span className="gradient-text">Mohamed</span> Zoraa</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right side - Form */}
                        <div className="lg:basis-1/2">
                            <form onSubmit={handleFormSubmit} className="hide duration-700 transition-all glass-card p-8 rounded-2xl space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full text-base bg-[#0a2f30] border border-[#30909230] focus:border-[#40dcdf] px-4 py-3 rounded-lg outline-none text-gray-200 transition-colors duration-300 placeholder:text-gray-500"
                                        placeholder="John Doe"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium">Your Email</label>
                                    <input
                                        type="email"
                                        className="w-full text-base bg-[#0a2f30] border border-[#30909230] focus:border-[#40dcdf] px-4 py-3 rounded-lg outline-none text-gray-200 transition-colors duration-300 placeholder:text-gray-500"
                                        placeholder="john@example.com"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium">Your Message</label>
                                    <textarea
                                        className="w-full h-32 bg-[#0a2f30] border border-[#30909230] focus:border-[#40dcdf] px-4 py-3 rounded-lg outline-none text-gray-200 resize-none transition-colors duration-300 placeholder:text-gray-500"
                                        name="message"
                                        placeholder="Tell me about your project..."
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn-glow w-full text-white px-8 py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-[#309092] to-[#40dcdf] shadow-lg shadow-[#30909040]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="mt-16 pt-8 border-t border-[#30909230] text-center">
                        <p className="text-gray-500 text-sm">© 2024 Mohamed Zoraa. All rights reserved.</p>
                    </div>
                    
                    {/* Success Modal */}
                    {emailSent && (
                        <div className="fixed inset-0 z-[1000] flex justify-center items-center bg-[#000000cc] backdrop-blur-sm p-4">
                            <div className="w-full max-w-lg glass-card p-8 rounded-2xl text-center space-y-4">
                                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#309092] to-[#40dcdf] flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white">Hello</h3>
                                <p className="text-gray-400">Thank you for reaching out! I&apos;ll get back to you as soon as possible.</p>
                                <p className="text-gray-500 text-sm">If you encounter any issues, reach out directly at <a className="text-[#40dcdf] hover:underline" href="mailto:mohamedzoraa100@gmail.com">mohamedzoraa100@gmail.com</a></p>
                                <button onClick={() => setEmailSent(false)} className="btn-glow mt-4 px-8 py-3 bg-gradient-to-r from-[#309092] to-[#40dcdf] text-white font-semibold rounded-lg">
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Contact