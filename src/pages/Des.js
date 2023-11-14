import React, { useEffect, useRef, useState } from 'react';
import { Link, Element, scroller, scrollSpy } from 'react-scroll';

const Section = () => {
  const [activeSection, setActiveSection] = useState('');
  const [lastActiveSection, setLastActiveSection] = useState('');
  const [scrollDirection, setScrollDirection] = useState('down');

  const prevScrollRef = useRef(0);

  // useEffect(() => {
  //   // غیرفعال کردن اسکرول
  //   document.body.style.overflow = 'hidden';

  //   // حذف event listener در زمان unmount
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, []);

  useEffect(() => {
    // Update scrollSpy
    scrollSpy.update();

    // Add a scroll event listener
    const handleScroll = () => {
      // Check if each element is in view
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setActiveSection(sectionId);
            setLastActiveSection(sectionId); // Set lastActiveSection
          }
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollSpy.update();
    };
  }, []);

  useEffect(() => {
    console.log(lastActiveSection)
    console.log('activeSection: ', activeSection)


  }, [lastActiveSection]);
  useEffect(() => {
    // Update activeSection when lastActiveSection changes
    setActiveSection(lastActiveSection);
  }, [lastActiveSection]);

  const scrollTo = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 1500,
      delay: 100,
      smooth: 'easeInOutQuint',
    });
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

      {sections.map((sectionId) => (
        <Element
          key={sectionId}
          id={sectionId}
          name={sectionId}
          style={{ height: '100vh' }}
          className={`element ${activeSection === sectionId ? 'active' : ''}`}
        >
          {sectionId.replace('test', 'Test ')}
        </Element>
      ))}
    </div>
  );
};

export default Section;
