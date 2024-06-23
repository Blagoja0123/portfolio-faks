"use client";

import { useRef, useEffect } from "react";
import "../styles/biography.css";
import animate from "@/styles/animate.module.css";


const Biography = () => {

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
    <section ref={containerRef} className={`bioContainer ${animate.initComponent} tag`} id="about">
        <div className="contentWrapper">
            <h3 className="bioHeading">За мене</h3>
            <p className="bioText">
              Јас сум од Струмица и студирам во Скопје. Од мал сум заинтерсиран во компјутери и од тоа произлегле интерес
              за секој вид на софтвер што го користив секојдневно од оперативниот систем до игрите. Со тоа имав зголемен фокус
              на предметите кои што спаѓаат под софтверско инженерство како математиката и компјутерските науки или информатиката. 
              Поради зголемениот интерес често учествував во натпревари, вклучувајќи меѓународни натпревари по математика и регионални натпревари по информатика.
              Исто така до сега имам вкупно 6 месечно практично искуство со програмирање во локална компанија Digimak и оваа лето повторно ќе сум таму за да го усовршам моето знаење и да стекнам повеќе искуство. 
            </p>
        </div>
    </section>
  )
}

export default Biography