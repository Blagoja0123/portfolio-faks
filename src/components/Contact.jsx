"use client";

import {useRef, useEffect} from 'react';
import "@/styles/contact.css"
import "@/styles/icons.css"
import animate from "@/styles/animate.module.css";
const Contact = () => {

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
    <section ref={containerRef} className={`contactContainer ${animate.initComponent}`} id="contact">
        <div className="contactWrapper">
            <h2>Стапете во контакт</h2>
            <h3>Информации за контакт и социјални мрежи</h3>
            <ul className='contactCardsWrapper'>
                <li className='contactCardsItem'>
                    <a href="mailto:blagoja01234@gmail.com" className="material-symbols-outlined">mail</a>
                </li>
                <li className='contactCardsItem' >
                    <a href="https://www.linkedin.com/in/blagoja-djorlev-419685270/" id='linkedIn' target='_blank'/>
                </li>
                <li className='contactCardsItem' >
                    <a href="https://github.com/Blagoja0123" target='_blank' id='gitHub'/>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Contact