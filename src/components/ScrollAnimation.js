"use client";

import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ScrollAnimation = ({ children, animationStyle, className, threshold = 0.01, duration = "100ms" }) => {
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          
          setHasAnimated(true);
        } else {
          setHasAnimated(false);
        }
      },
      {
        rootMargin:"10px",
        threshold,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  const animationClass = hasAnimated ? `animate-${animationStyle}` : "";
  const style = { transition: duration };

  return (
    <div
      ref={elementRef}
      className={`${className} scroll-animation ${animationClass}`}
      style={style}
    >
      {children}
    </div>
  );
};

ScrollAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  animationStyle: PropTypes.oneOf(["from-left", "from-bottom", "fade-in"]),
  className: PropTypes.string,
  threshold: PropTypes.number,
  duration: PropTypes.string,
};

ScrollAnimation.defaultProps = {
  animationStyle: "fade-in",
  className: "",
  threshold: 0.2,
  duration: "500ms", // Default duration
};

export default ScrollAnimation;
