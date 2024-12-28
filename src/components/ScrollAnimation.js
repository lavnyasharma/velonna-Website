"use client";

import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ScrollAnimation = ({ children, animationStyle, className, threshold = 0.2 }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold]);

  const animationClasses = {
    "from-left": "animate-from-left",
    "from-bottom": "animate-from-bottom",
    "fade-in": "animate-fade-in",
  };

  return (
    <div
      ref={elementRef}
      className={`scroll-animation ${animationClasses[animationStyle]} ${
        isVisible ? "is-visible" : ""
      } ${className}`}
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
};

ScrollAnimation.defaultProps = {
  animationStyle: "fade-in",
  className: "",
  threshold: 0.2,
};

export default ScrollAnimation;
