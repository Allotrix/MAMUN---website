import React, { useEffect, useState, useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSwipeContent, setShowSwipeContent] = useState(false);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: posX, clientY: posY } = e;

      setMousePosition({
        x: posX,
        y: posY,
      });

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          {
            duration: 500,
            fill: 'forwards',
          }
        );
      }

      const container = document.getElementById('previous-mun-photos');
      
      if (container) {
        const rect = container.getBoundingClientRect();
        if (
          posX >= rect.left &&
          posX <= rect.right &&
          posY >= rect.top &&
          posY <= rect.bottom
        ) {
          setShowSwipeContent(true);
        } else {
          setShowSwipeContent(false);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className='cursor-dot'
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
          zIndex: 99,
          pointerEvents: 'none',
          width: '5px',
          height: '5px',
          backgroundColor: '#DCA843',
          borderRadius: '50%',
        }}
      ></div>
      <div
        className='cursor-outline'
        ref={cursorOutlineRef}
        style={{
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
          zIndex: 99,
          pointerEvents: 'none',
          width: '30px',
          height: '30px',
          border: '2px solid #BABABA',
          borderRadius: '50%',
          backgroundColor: 'transparent',
        }}
      ></div>
      {showSwipeContent && (
        <div
          className='swipe-content flex gap-1 text-[#fff] justify-center items-center'
          style={{
            position: 'fixed',
            top: `${mousePosition.y + 20}px`,
            left: `${mousePosition.x + 20}px`,
            zIndex: 100,
          }}
        >
        {<FaArrowLeft />} Swipe {<FaArrowRight />}

        </div>
      )}
    </>
  );
};

export default Cursor;
