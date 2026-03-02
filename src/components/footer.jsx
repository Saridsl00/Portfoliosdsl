import { FaGithub, FaHeart, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        background: darkMode
          ? 'linear-gradient(to bottom, #000000, #111827)'
          : 'linear-gradient(to bottom, #f3f4f6, #e5e7db)'
      }}
      className="border-t"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h3
              className="text-2xl font-bold mb-2"
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Portfolio
            </h3>
            <p className="text-sm text-[#6b7280] dark:text-[#9ca3af]">
              Full stack Developer & UI/UX Designer
            </p>
          </div>

          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]">
              <FaGithub />
            </a>

            <a className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]">
              <FaLinkedin />
            </a>

            <a className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]">
              <FaTwitter />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm flex items-center justify-end gap-1 text-[#6b7280] dark:text-[#9ca3af]">
              © {currentYear} made 
              by <span
              className='mt-1 text-[#f97316]'>
                SDSL</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
;
export default Footer