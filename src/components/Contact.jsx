import contactImg from '../assets/contact.png'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = ({ darkMode }) => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_d35x4t4',      // ganti
            'template_t23954b',     // ganti
            form.current,
            'rJuMt6il-zgTx68_m'       // ganti
        )
        .then(() => {
            alert('Pesan berhasil dikirim! 🚀')
            form.current.reset()
        })
        .catch(() => {
            alert('Gagal mengirim pesan 😢')
        })
    }

    return (
        <section
        id="contact"
        style={{
            backgroundColor: darkMode ? '#111827' : '#f9fafb'
        }}
        className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* TITLE */}
                <div className="text-center mb-10" data-aos="fade-up">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-3"
                        style={{ color: darkMode ? 'white' : '#1f2937' }}
                    >
                        Get In{" "}
                        <span
                            style={{
                                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>
                            Touch
                        </span>
                    </h2>
                    <p
                        className="text-lg"
                        style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                        Let's discuss your project
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>

                    {/* IMAGE */}
                    <div className='flex justify-center order-2 lg:order-1' data-aos='fade-right'>
                        <img
                            src={contactImg}
                            alt="Contact"
                            className='w-full max-w-sm lg:max-w-md h-auto object-contain'
                        />
                    </div>

                    {/* FORM */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        style={{
                            background: darkMode
                                ? 'linear-gradient(to right, #1f2937, #111827)'
                                : 'linear-gradient(to right, #ffffff, #f9fafb)',
                            borderColor: darkMode ? '#374151' : '#e5e7eb'
                        }}
                        className='rounded-xl p-6 lg:p-8 border shadow-lg order-1 lg:order-2'
                        data-aos='fade-left'
                    >

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>

                            <input
                                name="first_name"
                                type='text'
                                placeholder='First Name'
                                required
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#faede3',
                                    color: darkMode ? 'white' : '#1f2937'
                                }}
                                className='w-full px-4 py-3 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all'
                            />

                            <input
                                name="last_name"
                                type='text'
                                placeholder='Last Name'
                                required
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#faede3',
                                    color: darkMode ? 'white' : '#1f2937'
                                }}
                                className='w-full px-4 py-3 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all'
                            />

                            <input
                                name="email"
                                type='email'
                                placeholder='Email Address'
                                required
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#faede3',
                                    color: darkMode ? 'white' : '#1f2937'
                                }}
                                className='w-full px-4 py-3 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all'
                            />

                            <input
                                name="phone"
                                type='tel'
                                placeholder='Phone Number'
                                required
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#faede3',
                                    color: darkMode ? 'white' : '#1f2937'
                                }}
                                className='w-full px-4 py-3 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all'
                            />

                        </div>

                        <textarea
                            name="message"
                            rows='4'
                            placeholder='Your Message'
                            required
                            style={{
                                backgroundColor: darkMode ? '#374151' : '#faede3',
                                color: darkMode ? 'white' : '#1f2937'
                            }}
                            className='w-full px-4 py-3 rounded-lg mb-4 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all'
                        />

                        <button
                            type='submit'
                            style={{
                                background: 'linear-gradient(to right, #f97316, #f59e0b)'
                            }}
                            className='w-full py-3 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all'
                        >
                            Send Message
                        </button>

                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact