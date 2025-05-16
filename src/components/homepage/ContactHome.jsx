import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

const ContactHome = () => {
  const [buttonRef, isButtonVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <>
      <div
        id="contact"
        className="min-h-[90vh] w-full py-16 sm:py-24 md:py-32 bg-black text-white flex justify-center mt-20"
      >
        <div className="w-full sm:w-[90%] md:w-[80%] px-4 sm:px-0 relative">
          <h2 className="text-3xl sm:text-5xl md:text-7xl border-b border-secondary text-white pb-8 sm:pb-12 md:pb-16 pr-24 sm:pr-36 md:pr-48">
            Let's work together
          </h2>
          <button
            ref={buttonRef}
            className={`w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 grid items-center rounded-[100%] absolute text-white font-medium bg-orange-500 hover:bg-orange-700 transition-all duration-[4000ms] ease-out text-xs sm:text-sm md:text-base lg:text-lg ${
              isButtonVisible
                ? "right-2 sm:right-8 md:right-16 top-2 sm:top-4 md:top-8"
                : "right-20 sm:right-40 md:right-96 top-2 sm:top-4 md:top-8"
            }`}
          >
            Get in touch
          </button>
          <div className="flex flex-col sm:flex-row gap-3 mt-10 sm:mt-16 md:mt-20">
            <button className="text-white border px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 rounded-full animated-hover hover:border-orange-500 text-sm sm:text-base">
              <a href="mailto:segebarifred@gmail.com">segebarifred@gmail.com</a>
            </button>

            <button className="text-white border px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 rounded-full animated-hover hover:border-orange-500 text-sm sm:text-base mt-3 sm:mt-0">
              <a href="tel:08148260644">08148260644</a>
            </button>
          </div>  
        </div>
      </div>
    </>
  );
};

export default ContactHome;
