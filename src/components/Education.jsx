"use client";

import { useRef, useEffect} from 'react'
import "@/styles/education.css"
import animate from "@/styles/animate.module.css";
const Education = () => {

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
    <section className={`eduContainer ${animate.initComponent}`} ref={containerRef} id='education'>
      <div className="contentWrapper">
          <h2 className='eduHeading'>ОБРАЗОВАНИЕ</h2>
          <p className='eduText'>
            Завршив средно училиште во СОУ „Јане Сандански“ - Струмица со одличен успех, од каде продолжив со моето образование и моментално сум студент во 
            Факултетот за Информатички Науки и Компјутерско Инженерство - Скопје.
          </p>
      </div>
    </section>
  )
}

export default Education