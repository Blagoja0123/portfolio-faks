import React from 'react'
import "@/styles/skills.css"
import "@/styles/icons.css"
const Skills = () => {
  return (
<section className='skillsContainer' id='projects'>
    <h1>My projects</h1>
    <h3>Some of the projects I've worked on</h3>
    <div className="flex">
        <div className="flex-item item">
            <div className="item-content">
                <div className="font-bold">Blog App</div>
                <p className="flex-grow">A blog application using a modern tech stack to explore on the developer experience of using newer technologies.</p>
                <a href="https://github.com/Blagoja0123/Blog-Application" target='_blank'>Learn More</a>
            </div>
        </div>
        <div className="flex-item item ">
            <div className="item-content   border-2">
                <div className="font-bold">Portfolio</div>
                <p className="flex-grow">An older version of my portfolio made with React and various other libraries, including a library for 3d graphics and animations.</p>
                <a href="https://portfolio-blagoja0123.vercel.app/" target='_blank'>Learn More</a>
            </div>
        </div>
        <div className="flex-item item ">
            <div className="item-content  border-2">
                <div className="font-bold">Toy Web Crawler</div>
                <p className="flex-grow">A simple version of a web crawler to explore how search engines work using Go.</p>
                <a href="https://github.com/Blagoja0123/toy-search-engine" target='_blank'>Learn More </a>
            </div>
        </div>
        <div className="flex-item item ">
            <div className="item-content  border-2 ">
                <div className="font-bold">Stock Management App</div>
                <p className="flex-grow">An old take home project that explores how the data model and business logic of a stock management solution.</p>
                <a href="https://github.com/Blagoja0123/StockManagement" target='_blank'>Learn More</a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Skills