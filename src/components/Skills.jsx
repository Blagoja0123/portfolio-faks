"use client";

import {useRef, useEffect} from 'react'
import "@/styles/skills.css"
import "@/styles/icons.css"
import animate from "@/styles/animate.module.css";

const Skills = () => {

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
<section className={`skillsContainer ${animate.initComponent}`} ref={containerRef} id='projects'>
    <h1>Моите проекти</h1>
    <h3>Некои од проектите на кои сум работил</h3>
    <div className="flex">
        <div className="flex-item item">
            <div className="item-content">
                <div className="font-bold">Блог Апликација</div>
                <p className="flex-grow">Апликација за блогови што користи модерни технологии за истражување на искуството на програмерите за користење на понови технологии.</p>
                <a href="https://github.com/Blagoja0123/Blog-Application" target='_blank'>Дознај Повеќе</a>
            </div>
        </div>
        <div className="flex-item item ">
            <div className="item-content   border-2">
                <div className="font-bold">Портфолио</div>
                <p className="flex-grow">Постара верзија на моето портфолио направено со React и разни други библиотеки, вклучително и библиотека за 3d графика и анимации.</p>
                <a href="https://portfolio-blagoja0123.vercel.app/" target='_blank'>Дознај Повеќе</a>
            </div>
        </div>
        <div className="flex-item item ">
            <div className="item-content  border-2">
                <div className="font-bold">Toy Web Crawler</div>
                <p className="flex-grow">Едноставен web crawler напишан со програмскиот јазик Go за да се истражи практична намена на n-арни дрвја и пребарувачи</p>
                <a href="https://github.com/Blagoja0123/toy-search-engine" target='_blank'>Дознај Повеќе </a>
            </div>
        </div>
        <div className="flex-item item ">
            <div className="item-content  border-2 ">
                <div className="font-bold">Апликација за инвентар</div>
                <p className="flex-grow">Стар проект што истражува како моделот на податоци и деловната логика на решението за управување со инвентар.</p>
                <a href="https://github.com/Blagoja0123/StockManagement" target='_blank'>Дознај Повеќе</a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Skills