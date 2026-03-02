import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'
import project5 from '../assets/project5.jpg'
import project6 from '../assets/project6.jpg'

const Project = ({ darkMode }) => {
  const Projects = [
    {
      id: 1,
      title: 'Dious Donuts',
      desc: 'Sistem informasi penjualan toko donat berbasis Laravel yang dilengkapi dengan fitur manajemen produk, transaksi, dan laporan, serta tampilan frontend yang responsif dan user-friendly.',
      image: project1,
      tags: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS'],
      github: 'https://github.com/Saridsl00/DiousDonuts.git',
      demo: 'https://demo-donut.vercel.app'
    },
    {
      id: 2,
      title: 'MEAL GOODS',
      desc: '',
      image: project2,
      tags: ['Figma'],
      demo: 'https://www.figma.com/proto/YLfsQ9gEHXLiiCWhCNZhgB/Untitled?node-id=1-3&t=cIlgLfRnFH0ITzxl-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3'
    },
    // {
    //   id: 3,
    //   title: 'Content Generator',
    //   desc: 'AI content generator built with MERN stack.',
    //   image: project4,
    //   tags: ['React', 'Node.js', 'MongoDB'],
    //   github: 'https://github.com/username/content-generator',
    //   demo: 'https://content-ai.vercel.app'
    // }
  ]

  return (
    <section
      id='Projects'
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
      }}
      className='relative py-24'
    >
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-10' data-aos='fade-up'>
          <h2
            className='text-3xl sm:text-4xl font-bold mb-3'
            style={{
              color: darkMode ? 'white' : '#1f2937'
            }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className='max-w-xl mx-auto'
            style={{
              color: darkMode ? '#d1d5db' : '#6b7280'
            }}
          >
            Kumpulan proyek yang telah saya kembangkan sebagai bentuk penerapan
            kemampuan dalam pengembangan sistem, perancangan database, dan pembuatan aplikasi.
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
          {Projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? 'linear-gradient(to right, #1f2937, #111827)'
                  : 'linear-gradient(to right, #ffffff, #f9fafb)',
                borderColor: darkMode ? '#374151' : '#e5e7eb'
              }}
              className='group rounded-xl border duration-300 hover:border-orange-500/50 transition-all'
              data-aos='fade-up'
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className='h-36 overflow-hidden rounded-t-xl'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>

              {/* Content */}
              <div className='p-4'>
                <h3
                  className='text-lg font-bold mb-2'
                  style={{
                    color: darkMode ? 'white' : '#1f2937'
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className='text-sm mb-3'
                  style={{
                    color: darkMode ? '#d1d5db' : '#6b7280'
                  }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-1.5 mb-4'>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                        color: darkMode ? '#d1d5db' : '#4b5563'
                      }}
                      className='px-2 py-1 text-xs rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className='flex gap-2'>
                  {/* Code button hanya muncul kalau ada github */}
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                        color: darkMode ? 'white' : '#374151'
                      }}
                      className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2
                      text-sm rounded-lg hover:opacity-90 transition-colors'
                    >
                      <FaGithub className='text-sm' />
                      <span>Code</span>
                    </a>
                  )}

                  {/* Demo button */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        background: 'linear-gradient(to right, #f97316, #f59e0b)'
                      }}
                      className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white
                      text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                    >
                      <FaExternalLinkAlt className='text-sm' />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className='text-center mt-10'>
          <a
            href='https://github.com/Saridsl00'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              background: 'linear-gradient(to right, #f97316, #f59e0b)'
            }}
            className='inline-flex items-center font-semibold gap-2 px-7 py-4 text-white
            text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all'
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className='text-sm' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Project