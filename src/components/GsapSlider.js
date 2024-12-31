"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap, Power1, Expo } from "gsap";
import { useSwipeable } from "react-swipeable";
import "./Slider.css";

// Tilt Component
const useTilt = (ref, options) => {
  useEffect(() => {
    const el = ref.current;
    const defaultOptions = {
      rotate: { x: 10, y: 10 },
      translate: { x: 10, y: 10 },
      lock: false,
      speed: 800,
    };
    const config = { ...defaultOptions, ...options };

    const handleMouseMove = (e) => {
      const bounds = el.getBoundingClientRect();
      const relX = e.clientX - bounds.left;
      const relY = e.clientY - bounds.top;

      const rotation = {
        x: ((relY / bounds.height - 0.5) * config.rotate.x).toFixed(2),
        y: ((relX / bounds.width - 0.5) * -config.rotate.y).toFixed(2),
      };

      gsap.to(el, {
        rotationX: rotation.x,
        rotationY: rotation.y,
        transformPerspective: 800,
        ease: Power1.easeOut,
        duration: config.speed / 1000,
      });
    };

    const resetTilt = () => {
      if (config.lock) {
        gsap.to(el, { rotationX: 0, rotationY: 0, ease: Power1.easeOut });
      }
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", resetTilt);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", resetTilt);
    };
  }, [ref, options]);
};

// Slide Component
const Slide = ({ slide, isCurrent, direction, animationConfig }) => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = wrapperRef.current;

    if (isCurrent) {
      const tl = gsap.timeline();
      tl.fromTo(
        el,
        { x: direction === "right" ? "100%" : "-100%" },
        { x: "0%", ease: animationConfig.ease, duration: animationConfig.duration }
      );
      gsap.fromTo(
        textRef.current,
        { opacity: 0.2, filter: "blur(30px)" },
        { opacity: 1, filter: "blur(0px)", ease: animationConfig.ease }
      );
    } else {
      gsap.to(el, { x: direction === "right" ? "-100%" : "100%", ease: Power1.easeOut });
    }
  }, [isCurrent, direction]);

  useTilt(imgRef, { translate: { x: 10, y: 10 } });

  return (
    <div ref={wrapperRef} className={`slide ${isCurrent ? "current" : ""}`}>
      <div className="slide-content">
        <div ref={imgRef} className="slide-image">
          <img src={slide.img} alt={slide.title} />
        </div>
        <div ref={textRef} className="slide-text">
          <h2>{slide.title}</h2>
          <p>{slide.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

// Slider Component
const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const direction = useRef("right");
  const isAnimating = useRef(false);

  const navigate = (idx) => {
    if (isAnimating.current || idx === currentSlide) return;
    isAnimating.current = true;
    direction.current = idx > currentSlide ? "right" : "left";
    setCurrentSlide(idx);
    setTimeout(() => {
      isAnimating.current = false;
    }, 1000);
  };

  const nextSlide = () => navigate((currentSlide + 1) % slides.length);
  const prevSlide = () => navigate((currentSlide - 1 + slides.length) % slides.length);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  useEffect(() => {
    const autoplay = setInterval(nextSlide, 4000);
    return () => clearInterval(autoplay);
  }, [currentSlide]);

  return (
    <div {...handlers} className="slider-container overflow-hidden">
      {slides.map((slide, idx) => (
        <Slide
          key={idx}
          slide={slide}
          isCurrent={idx === currentSlide}
          direction={direction.current}
          animationConfig={{ duration: 1, ease: Expo.easeInOut }}
        />
      ))}
      <nav className="slider-navigation">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`slider-bullet ${idx === currentSlide ? "active" : ""}`}
            onClick={() => navigate(idx)}
          />
        ))}
      </nav>
    </div>
  );
};

export default Slider;
