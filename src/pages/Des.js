import React, { useEffect, useRef, useState } from 'react';
import { Link, Element, scroller, scrollSpy } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

const Section = () => {
  const [activeSection, setActiveSection] = useState('');
  const [lastActiveSection, setLastActiveSection] = useState('');
  const [scrollDirection, setScrollDirection] = useState('down');
  const prevScrollRef = useRef(0);
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800, // مدت زمان انیمیشن به میلی‌ثانیه
      smooth: 'easeInOutQuad', // تنظیم نوع انیمیشن
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      if (currentPosition > prevScrollRef.current) {
        setScrollDirection('down');
      } else if (currentPosition < prevScrollRef.current) {
        setScrollDirection('up');
      } else {
        setScrollDirection('none');
      }

      prevScrollRef.current = currentPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, []);

  useEffect(() => {
    scrollSpy.update();

    const handleScroll = () => {
      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isSectionVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

          if (isSectionVisible) {
            setActiveSection(sectionId);
            setLastActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollSpy.update();
    };
  }, []);

  const scrollTo = (sectionId) => {
    if (sectionId === 'move') {
      scroller.scrollTo(sectionId, {
        duration: 1500, // Duration of the animation in milliseconds
        delay: 100, // Delay before starting the animation
        smooth: 'easeInOutQuint', // Type of animation
      });
    } else {
      scroller.scrollTo(sectionId, {
        duration: 800, // Duration of the animation in milliseconds
        smooth: 'easeInOutQuad', // Type of animation
      });
    }
  };
  const sections = ['test1', 'test2', 'test3'];

  return (
    <div>
      {sections.map((sectionId) => (
        <Link
          key={sectionId}
          activeClass="active"
          to={sectionId}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => scrollTo(sectionId)}
        >
          {sectionId.replace('test', 'Test ')}
        </Link>
      ))}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#262a57',
          color: '#fff',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
          border: 'none',
        }}
      >
        بازگشت به بالا
      </button>
      {sections.map((sectionId) => (
        <Element
          key={sectionId}
          id={sectionId}
          name={sectionId}
          style={{ height: '100vh' }}
          className={`element ${activeSection === sectionId ? 'active' : ''}`}
        >
          <p>Scroll Direction: {scrollDirection}</p>
          {sectionId.replace('test', 'Test ')}
        </Element>
      ))}
    </div>
  );
};

export default Section;
