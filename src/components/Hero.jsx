import React from 'react'
import "@/styles/hero.css"

const Hero = () => {
  return (
    <section className='heroContainer'>
        <div className='heroHeadingContainer'>
            <div className='nodeContainer'>
                <div className='circle'/>
                <div className='streak'/>
            </div>
            <div className='textWrapper'>
                <h1>Welcome,</h1>
                <h2>I'm <span>Blagoja</span></h2>
            </div>
        </div>
    </section>
  )
}

export default Hero