"use client";

import React, { useEffect, useRef } from 'react'
import "@/styles/hero.css"
import animate from "@/styles/animate.module.css";


const Hero = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animate.floatIn);
          observer.unobserve(entry.target);
        }
      });
    });

    const container = containerRef.current;
    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, []);

  return (
    <section className={`heroContainer ${animate.initComponent}`} ref={containerRef}>
        <div className='heroHeadingContainer'>
            <div className='textWrapper'>
                <h1>Здраво,</h1>
                <h2>Јас сум <span>Благоја</span></h2>
            </div>
        </div>
    </section>
  )
}

export default Hero