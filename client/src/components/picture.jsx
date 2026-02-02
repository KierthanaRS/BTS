import React from 'react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
// Make sure to import or define your styles

const Picture = () => {
  const stageRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    //const stage = stageRef.current;
    //const hero = heroRef.current;
    const select = (e) => document.querySelector(e);
    const selectAll = (e) => document.querySelectorAll(e);

    const stage = select('.stage');
    const hero = select('.hero');
    //let gltl = gsap.timeline({ delay: 1 });
    let sparks = gsap.utils.toArray('.spark');
    let xDist = "100vw";
    let tapped = false;
    let gltl = gsap.timeline({ delay: 1 });
    function animInCuboids() {
        let tl = gsap.timeline( {
            delay: 0
        });
        
        tl.from('.hero__cuboid', {
            rotateY: 270,
            duration: 5,
            ease: 'power4', 
            stagger: 0.2,
            transformOrigin: "center center"
        }, 0)
        .from('.hero__cuboid', {
            // y: function(i) {
            //     if(i%2 == 0) {
            //         return "-50vh";
            //     }
            //     return "50vh";
            // },
            x: xDist,
            duration: 4,
            stagger: 0.4,
            ease: 'power4'
        }, 0)
        .from('.hero__cuboid', {
            rotationZ: 90,
            stagger: 0.2,
            duration: 6,
            ease: 'power4'
        }, 0)
        .from('.hero', {
            scale: 2.5,
            duration: 9,
            ease: 'power4',
        }, 0)
        .to('.face--right img', {
            opacity: 0,
            duration: 1.5,
            ease: 'power4', 
            stagger: 0.4
        }, 0)
        .to('.face--back img', {
            opacity: 0,
            duration: 5,
            ease: 'power4', 
            stagger: 0.4
        }, 0)
        .to('.face--left img', {
            opacity: 0,
            duration: 5,
            ease: 'power4', 
            stagger: 0.4,
            onComplete: initEvents
        }, 0.5)
        .from('.face--front img', {
            // x: "-25px", // doesn't work with object-fit
            // css: { objectPosition: "50% 50%" }, // too janky
            scale: 1.5,
            transformOrigin: "right top",
            duration: 9,
            ease: 'power3.out', 
            // stagger: 0.4
        }, 1.5);
        
        return tl;
    }
    function sparkle() {
    
        let stl = gsap.timeline();
        
        sparks.forEach((target, i ) => {
    
            let tl = gsap.timeline();
    
            tl.set(target, {
                opacity: 1
            })
            .to(target, {
                duration: 1.5,
                physics2D: {
                    velocity: 'random(100, 400)',
                    angle:'random(360, 0)',
                    gravity: 100
                },
                scale: 0,
                opacity: 0,
                ease: 'sine'
            })
            
            stl.add(tl, 0);
        })
        
        return stl;
    }
    
    let roTL = gsap.timeline({
        defaults: {
            duration: 1,
            ease: 'sine.inOut'
        }
    });
    
    let rot = 90;
    function addRotAnim() {
        roTL.to('.hero__cuboid--1', {
            keyframes: [
                {
                    x: "-75%",
                    ease: 'power4.inOut'
                },
                {
                    rotationY: -rot,
                    delay: -1,
                    ease: 'power4.inOut'
                }
            ]
        })
        .to('.hero__cuboid--1 .face--front img', {
            opacity: 0,
            ease: 'power2.inOut'
        }, 0)
        .from('.hero__cuboid--1 .face--right img', {
            opacity: 0,
            ease: 'power2.inOut'
        }, 0.1)
        .fromTo('.hero__cuboid--1 .face--back img', {
                opacity: 0
            },{
                opacity: 0.2,
                ease: 'power2.inOut'
        }, 0)
        .to('.hero__cuboid--2', {
            keyframes: [
                {
                    x: "-25%",
                    ease: 'power4.inOut'
                },
                {
                    rotationY: -rot,
                    delay: -1,
                    ease: 'power4.inOut'
                }
            ]
        }, 0)
        .to('.hero__cuboid--2 .face--front img', {
            opacity: 0,
            ease: 'power2.inOut'
        }, 0)
        .from('.hero__cuboid--2 .face--right img', {
            opacity: 0,
            ease: 'power2.inOut'
        }, 0.1)
        .fromTo('.hero__cuboid--2 .face--back img', {
                opacity: 0
            },{
                opacity: 0.2,
                ease: 'power2.inOut'
        }, 0.1)
        .to('.hero__cuboid--3', {
            keyframes: [
                {
                    x: "25%",
                    ease: 'power4.inOut'
                },
                {
                    rotationY: rot,
                    delay: -1,
                    ease: 'power4.inOut'
                }
            ]
        }, 0)
        .to('.hero__cuboid--3 .face--front img', {
            opacity: 0,
            ease: 'power2.inOut'
        }, 0)
        .from('.hero__cuboid--3 .face--left img', {
            opacity: 0,
            ease: 'power2.inOut'
        }, 0.1)
        .fromTo('.hero__cuboid--3 .face--back img', {
                opacity: 0
            },{
                opacity: 0.2,
                ease: 'power2.inOut'
        }, 0.1)
        .to('.hero__cuboid--4', {
            keyframes: [
                {
                    x: "75%",
                    ease: 'power4.inOut'
                },
                {
                    rotationY: rot,
                    delay: -1,
                    ease: 'power4.inOut'
                }
            ]
        }, 0)
        .to('.hero__cuboid--4 .face--front img', {
            opacity: 0,
            ease: 'power2.inOut'
        }, 0)
        .from('.hero__cuboid--4 .face--left img', {
            opacity: 0,
            ease: 'power2.inOut'
        }, 0.05)
        .fromTo('.hero__cuboid--4 .face--back img', {
                opacity: 0
            },{
                opacity: 0.2,
                ease: 'power2.inOut'
        }, 0.1)
        .pause();
    }
    
    function initEvents() {
        gsap.set('.face img', { opacity: 1 });
        addRotAnim();
        hero.addEventListener("mouseenter", function( event ) {
            roTL.play();
        }, false);
    
        hero.addEventListener("mouseleave", function( event ) {
            roTL.reverse();
        }, false);
        hero.addEventListener('touchstart', function(event) {
            if(!tapped){
                tapped = true;
                roTL.play();
            }
            else {
                tapped = false;
                roTL.reverse();
            }
            
        });
    }
    
    // Call initEvents function after the animation is completed
    function onComplete() {
        initEvents();
    }
    
    // Add onComplete callback to the existing timeline
    gltl.eventCallback("onComplete", onComplete);
    

    // Add the rest of your GSAP animations and logic here...

    // Don't forget to clean up GSAP animations on component unmount
    return () => {
      gltl.kill(); // Kill GSAP timeline to avoid memory leaks
    };
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return (
    <div>
    <div className="stage" ref={stageRef}>
      <div className="hero" ref={heroRef}>
        <div className="hero__inner">
          <div className="hero__cuboid hero__cuboid--1">
            <div className="face face--front"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/disney-mandalorian.jpg" alt="" /></div>
            <div className="face face--back"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/disney-hulk.jpg" alt="" /></div>
            <div className="face face--left"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/disney-iron-man-2.jpg" alt="" /></div>
            <div className="face face--right"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/disney-black-panther.jpg" alt="" /></div>
            <div className="face face--top"></div>
            <div className="face face--bottom"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Picture;
