import Instagram from '../assets/instagram .png'
import tiktok from '../assets/tiktok.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'
import hero from '../assets/hero.png'
import hi from '../assets/hi.png'
import CV from '../assets/CV.jpg'
import { DownloadIcon, Mail } from 'lucide-react'

const Hero = ({ darkMode }) => {

    // ===============================
    // SOCIAL DATA (EDIT USERNAME)
    // ===============================
    const sosialIcons = [
         {
            icon: Instagram,
            alt: 'Instagram',
            web: 'https://www.instagram.com/saridsl.m/',
            app: 'instagram://user?username=saridsl.m',
            color: 'hover:drop-shadow-[0_0_8px_rgba(255,0,150,0.7)]'
        },
        {
            icon: tiktok,
            alt: 'TikTok',
            web: 'https://www.tiktok.com/@usernameimu',
            app: 'snssdk1128://user/profile/usernameimu',
            color: 'hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]'
        },
        {
            icon: github,
            alt: 'GitHub',
            web: 'https://github.com/Saridsl00',
            app: 'github://user?username=Saridsl00',
            color: 'hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]'
        },
        {
            icon: youtube,
            alt: 'YouTube',
            web: 'https://youtube.com/@saridosmasantalusi',
            app: 'vnd.youtube://channel/saridosmasantalusi',
            color: 'hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.7)]'
        },
    ];

    // ===============================
    // AUTO OPEN APP / WEB
    // ===============================
    const openSocial = (web, app) => {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

        if (isMobile) {
            window.location.href = app
            setTimeout(() => {
                window.open(web, '_blank')
            }, 500)
        } else {
            window.open(web, '_blank')
        }
    }

    // ===============================
    // THEMES
    // ===============================
    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: 'text-white border-2 border-orange-500 hover:bg-orange-600',
        decorativeCircle: 'bg-orange-500 opacity-10',
    };

    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: 'text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
        decorativeCircle: 'bg-orange-400 opacity-20',
    };

    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <div className='relative overflow-hidden min-h-screen flex flex-col justify-center'>
            <section
                id='home'
                data-aos='fade-up'
                data-aos-delay='250'
                className='body-font z-10'
            >
                <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14
                flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14'>

                    {/* ================= LEFT CONTENT ================= */}
                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start
                    text-center lg:text-left mb-12 lg:mb-0'>

                        {/* SOCIAL ICONS */}
                        <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 w-full pb-8 sm:pb-8'>
                            {sosialIcons.map((sosial, index) => (
                                <div
                                    key={index}
                                    title={sosial.alt}
                                    onClick={() => openSocial(sosial.web, sosial.app)}
                                    data-aos-delay={`${400 + index * 100}`}
                                    className={`
                                        group relative cursor-pointer
                                        transform transition-all duration-300
                                        hover:scale-125 hover:-translate-y-1
                                        ${sosial.color}
                                    `}
                                >
                                    <img
                                        src={sosial.icon}
                                        alt={sosial.alt}
                                        className={`w-8 h-8 sm:w-10 sm:h-10 object-contain
                                        transition-all duration-300
                                        group-hover:rotate-6
                                        ${darkMode ? '' : 'filter brightness-75'}`}
                                    />

                                    {/* Tooltip */}
                                    <span className="
                                        absolute -bottom-7 left-1/2 -translate-x-1/2
                                        text-xs px-2 py-1 rounded-md
                                        bg-black text-white opacity-0
                                        group-hover:opacity-100
                                        transition-all duration-300
                                        pointer-events-none whitespace-nowrap
                                    ">
                                        {sosial.alt}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* TITLE */}
                        <h1
                            className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                            data-aos='fade-up'
                            data-aos-delay='500'>
                            Hi, I'm Sari Dosma Santa Lusi Manullang
                        </h1>

                        {/* DESCRIPTION */}
                        <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md
                        sm:max-w-lg ${theme.textSecondary}`}
                        data-aos='fade-up'
                        data-aos-delay='600'>
                        <span className="block">Information Systems Student</span>
                        <span className="block">Web Development • UI Design • Database Management</span>
                        <span className="block">Laravel | MySQL | Figma</span>
                        <span className="block">Open for Internship 2026</span>
                        </p>

                        {/* BUTTONS */}
                        <div className='w-full pt-4 sm:pt-6'>
                            <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                                data-aos='fade-up'
                                data-aos-delay='700'>

                                {/* DOWNLOAD CV */}
                                <a href={CV} download className='w-full sm:w-auto'>
                                    <button className='w-full sm:w-auto inline-flex 
                                    items-center justify-center text-white bg-linear-to-r 
                                    from-orange-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] 
                                    rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform'>
                                        <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2' />
                                        Download CV
                                    </button>
                                </a>

                                {/* CONTACT */}
                                <a href="#contact" className='w-full sm:w-auto'>
                                    <button className={`w-full sm:w-auto inline-flex 
                                    items-center ${theme.buttonSecondary} justify-center border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] 
                                    rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}>
                                        <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                                        Contact Me
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ================= HERO IMAGE ================= */}
                    <div className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
                        data-aos='fade-left'
                        data-aos-delay='400'>
                        <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
                            <div className='relative overflow-hidden'>
                                <img
                                    src={hero}
                                    alt="Hero Image"
                                    className='w-full h-auto object-cover transform
                                    hover:scale-105 transition-transform duration-500'
                                />
                            </div>
                            {/* <img
                                src={hi}
                                alt="Hi icon"
                                className='absolute top-2 sm:top-4 left-12 sm:left-20
                                w-20 h-14 sm:w-20 sm:h-20 object-contain animate-bounce opacity-90 z-10'
                            /> */}
                        </div>
                    </div>
                </div>

                {/* DECORATION */}
                <div className={`absolute -top-20 -left-20 w-40 h-40
                    sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full
                    mix-blend-multiply filter blur-3xl opacity-10 
                    animate-pulse delay-1000 hidden sm:block`}>
                </div>
            </section>
        </div>
    )
}

export default Hero