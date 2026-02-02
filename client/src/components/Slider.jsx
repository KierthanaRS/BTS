import React, { useEffect, useState } from 'react';

const Slider = ({ slides, repeat, noArrows, noBullets }) => {
  const [slideCurrent, setSlideCurrent] = useState(-2);

  const slideTotal = slides.length - 1;
  useEffect(() => {
    slideInitial();
  }, [slides]);
  

  
  
  const initArrows = () => {
    if (noArrows) {
      return;
    }

    const leftArrow = document.createElement('a');
    const iLeft = document.createElement('i');
    iLeft.classList.add('fa');
    iLeft.classList.add('fa-arrow-left');
    leftArrow.classList.add('slider-left');
    leftArrow.appendChild(iLeft);
    leftArrow.addEventListener('click', () => {
      slideLeft();
    });

    const rightArrow = document.createElement('a');
    const iRight = document.createElement('i');
    iRight.classList.add('fa');
    iRight.classList.add('fa-arrow-right');
    rightArrow.classList.add('slider-right');
    rightArrow.appendChild(iRight);
    rightArrow.addEventListener('click', () => {
      slideRight();
    });

    document.querySelector('.slider-container').appendChild(leftArrow);
    document.querySelector('.slider-container').appendChild(rightArrow);
    checkArrowVisibility();
  };
  const checkArrowVisibility = () => {
    const leftArrow = document.querySelector('.slider-left');
    const rightArrow = document.querySelector('.slider-right');
  
    // Hide left arrow if the first slide is displayed
    if (slideCurrent === -1) {
      leftArrow.classList.add('not-visible');
    } else {
      leftArrow.classList.remove('not-visible');
    }
  
    // Hide right arrow if the last slide is displayed
    if (slideCurrent === slideTotal) {
      rightArrow.classList.add('not-visible');
    } else {
      rightArrow.classList.remove('not-visible');
    }
  };
  
  const slideInitial = () => {
   // initBullets();
    initArrows();
    setTimeout(() => {
      slideRight();
    }, 500);
  };
  const checkRepeat = () => {
    if (!repeat) {
      if (slideCurrent === slides.length - 1) {
        slides[0].classList.add('not-visible');
        slides[slides.length - 1].classList.remove('not-visible');
        if (!noArrows) {
          document.querySelector('.slider-right').classList.add('not-visible');
          document.querySelector('.slider-left').classList.remove('not-visible');
        }
      } else if (slideCurrent === 0) {
        slides[slides.length - 1].classList.add('not-visible');
        slides[0].classList.remove('not-visible');
        if (!noArrows) {
          document.querySelector('.slider-left').classList.add('not-visible');
          document.querySelector('.slider-right').classList.remove('not-visible');
        }
      } else {
        slides[slides.length - 1].classList.remove('not-visible');
        slides[0].classList.remove('not-visible');
        if (!noArrows) {
          document.querySelector('.slider-left').classList.remove('not-visible');
          document.querySelector('.slider-right').classList.remove('not-visible');
        }
      }
    }
  };

  const slideRight = () => {
    if (slideCurrent < slideTotal) {
      setSlideCurrent((prev) => prev + 1);
    } else {
      setSlideCurrent(0);
    }
  
    if (!slides || !slides.length) {
      return;
    }
  
    const preactiveSlide = slideCurrent > 0 ? slides[slideCurrent - 1] : slides[slideTotal];
    const activeSlide = slides[slideCurrent];
    const proactiveSlide = slideCurrent < slideTotal ? slides[slideCurrent + 1] : slides[0];
  
    slides.forEach((elem) => {
      var thisSlide = elem;
      if (thisSlide && thisSlide.classList && thisSlide.classList.contains('preactivede')) {
        thisSlide.classList.remove('preactivede');
        thisSlide.classList.remove('preactive');
        thisSlide.classList.remove('active');
        thisSlide.classList.remove('proactive');
        thisSlide.classList.add('proactivede');
      }
      if (thisSlide && thisSlide.classList && thisSlide.classList.contains('preactive')) {
        thisSlide.classList.remove('preactive');
        thisSlide.classList.remove('active');
        thisSlide.classList.remove('proactive');
        thisSlide.classList.remove('proactivede');
        thisSlide.classList.add('preactivede');
      }
    });
  
    if (preactiveSlide && preactiveSlide.classList) {
      preactiveSlide.classList.remove('preactivede');
      preactiveSlide.classList.remove('active');
      preactiveSlide.classList.remove('proactive');
      preactiveSlide.classList.remove('proactivede');
      preactiveSlide.classList.add('preactive');
    }
  
    if (activeSlide && activeSlide.classList) {
      activeSlide.classList.remove('preactivede');
      activeSlide.classList.remove('preactive');
      activeSlide.classList.remove('proactive');
      activeSlide.classList.remove('proactivede');
      activeSlide.classList.add('active');
    }
  
    if (proactiveSlide && proactiveSlide.classList) {
      proactiveSlide.classList.remove('preactivede');
      proactiveSlide.classList.remove('preactive');
      proactiveSlide.classList.remove('active');
      proactiveSlide.classList.remove('proactivede');
      proactiveSlide.classList.add('proactive');
    }
    checkArrowVisibility();
  };
  
  const slideLeft = () => {
    if (slideCurrent > 0) {
      setSlideCurrent((prev) => prev - 1);
      console.log(slideCurrent);
      } 
      else {
        setSlideCurrent(slideTotal);

      }
  
    if (!slides || !slides.length) {
      return;
    }
  
    const proactiveSlide = slideCurrent < slideTotal ? slides[slideCurrent + 1] : slides[0];
    const activeSlide = slides[slideCurrent];
    const preactiveSlide = slideCurrent > 0 ? slides[slideCurrent - 1] : slides[slideTotal];
  
    slides.forEach((elem) => {
      var thisSlide = elem;
      if (thisSlide && thisSlide.classList && thisSlide.classList.contains('proactive')) {
        thisSlide.classList.remove('preactivede');
        thisSlide.classList.remove('preactive');
        thisSlide.classList.remove('active');
        thisSlide.classList.remove('proactive');
        thisSlide.classList.add('proactivede');
      }
      if (thisSlide && thisSlide.classList && thisSlide.classList.contains('proactivede')) {
        thisSlide.classList.remove('preactive');
        thisSlide.classList.remove('active');
        thisSlide.classList.remove('proactive');
        thisSlide.classList.remove('proactivede');
        thisSlide.classList.add('preactivede');
      }
    });
  
    if (preactiveSlide && preactiveSlide.classList) {
      preactiveSlide.classList.remove('preactivede');
      preactiveSlide.classList.remove('active');
      preactiveSlide.classList.remove('proactive');
      preactiveSlide.classList.remove('proactivede');
      preactiveSlide.classList.add('preactive');
    }
  
    if (activeSlide && activeSlide.classList) {
      activeSlide.classList.remove('preactivede');
      activeSlide.classList.remove('preactive');
      activeSlide.classList.remove('proactive');
      activeSlide.classList.remove('proactivede');
      activeSlide.classList.add('active');
    }
  
    if (proactiveSlide && proactiveSlide.classList) {
      proactiveSlide.classList.remove('preactivede');
      proactiveSlide.classList.remove('preactive');
      proactiveSlide.classList.remove('active');
      proactiveSlide.classList.remove('proactivede');
      proactiveSlide.classList.add('proactive');
    }
  
    checkArrowVisibility();
  };
  

  const goToIndexSlide = (index) => {
    const sliding = slideCurrent > index ? slideRight : slideLeft;
    while (slideCurrent !== index) {
      sliding();
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-content">
        {slides.map(({ videoSrc, title }, index) => (
          <div key={index} className={`slider-single ${index === slideCurrent ? 'active' : ''}`}>
            <iframe title={`slide-${index}`} className="slider-single-iframe" src={videoSrc} allowFullScreen></iframe>
            <h1 className="slider-single-title">{title}</h1>
            {/* <a className="slider-single-likes" href="#!">
              <i className="fa fa-heart"></i>
              <p>10</p>
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
