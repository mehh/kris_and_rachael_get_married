import { TweenMax } from 'gsap';

/**
 *  NOTES:
 *  - CONFIG:
 *      * bottomOffset is the point at which react-waypoint will trigger the onLeave/onEnter events.
 *      * You can add any defalut/initial/starting-point styles to the target element that you need in the intialStyles object.
 *  - CALLBACK:
 *      * Gets invoked when target element revealed state is True.
 *      * target is a refernece to 'element-reveal' from the Reveal component
 *      * what you use here is up to you, below are two examples using GSAP & vanilla add/remove class
 */

/**
 * start gsap animation
 *
 */
export const gsapAnimation = {
  config: {
    bottomOffset: '100px',
    initialStyles: {
      background: 'green',
      fontSize: '30px',
      padding: '50px 25px'
    }
  },
  callback: (target, revealed) => {
    const duration = 1.5;
    const delay = 0;

    TweenMax.to(target, duration, {
      opacity: (revealed === true ? 1 : 0),
      y: (revealed === true ? '0' : '100px'),
      transformStyle: 'preserve-3d',
    }).delay(delay);
  }
};
/**
 * end gsap animation
 */


/**
 * start class animation
 */
export const classAnimation = {
  config: {
    bottomOffset: '100px',
    initialStyles: {
      background: 'yellow',
      fontSize: '30px',
      padding: '50px 25px',
      transition: 'all 1000ms ease',
      transformStyle: 'preserve-3d',
      transform: 'translateY(100px)',
      opacity: 0
    }
  },
  callback: (target, revealed) => {
    if (revealed && !target.classList.contains('revealed')) {
      target.classList.add('revealed');
    } else {
      target.classList.remove('revealed');
    }
  }
};
/**
 * end class animation
 */