/**
 *  Page transitions
*/

export const horizontalAnimationExit = (direction = 'right', node) => {
    const body = document.getElementsByTagName('body')[0];
  
    // overlay
    const overlay = document.getElementById('overlay');
    const overlayBg = overlay.querySelector('.component-overlay-transition__background');
  
    // header elements
    const header = document.querySelector('.component-header');
    const headerContainer = header.querySelector('.component-header__container');
  
    const directionFrom = direction === 'left' ? '100%' : '-100%';
  
    // kinda hacky way to get pathname from baseURI (transition link)
    const getLocation = (href) => {
      const link = document.createElement('a');
      link.href = href;
      return link;
    };
  
    // variables for setting body classes
    const { baseURI } = node;
    const location = getLocation(baseURI);
    const { pathname } = location;
  
    const globalEasing = CustomEase.create('custom', 'M0,0 C0.47,0 0.22,1.04 1,1');
  
    return new TimelineMax()
      .call(() => { setBodyClasses(pathname, 200); }) // set body class on special pages
      .set(body, {
        overflow: 'hidden',
      })
      // set overlay transition direction
      .set(overlay, {
        visibility: 'visible'
      })
      .set(overlayBg, {
        x: directionFrom,
        transformPerspective: 500
      })
      // set header to 0 opacity
      .to(header, 0.15, {
        opacity: 0,
        transformPerspective: 500
      })
      // start transition for overlay
      .to(overlayBg, 0.65, {
        x: '0%',
        ease: globalEasing
      })
      // set header container to 0 opacity and move up 25px for later fade in
      .set(headerContainer, {
        opacity: 0,
        y: -25
      });
  };
  
  export const horizontalAnimationEntry = (direction = 'right') => {
    const body = document.getElementsByTagName('body')[0];
  
    // overlay
    const overlay = document.getElementById('overlay');
    const overlayBg = overlay.querySelector('.component-overlay-transition__background');
  
    // header elements
    const header = document.querySelector('.component-header');
    const headerContainer = header.querySelector('.component-header__container');
  
    const directionTo = direction === 'left' ? '-100%' : '100%';
  
    const globalEasing = CustomEase.create('custom', 'M0,0 C0.47,0 0.22,1.04 1,1');
  
    return new TimelineMax()
      .to(overlayBg, 0.35, {
        x: directionTo,
        ease: globalEasing,
        clearProps: 'all'
      })
      .to(overlay, 0, {
        visibility: 'hidden'
      })
      // set headerback to opacity 1
      .set(header, {
        opacity: 1,
        clearProps: 'all'
      })
      // transition header container back into view
      .to(headerContainer, 0.25, {
        opacity: 1,
        y: 0,
        ease: 'ease',
        clearProps: 'all'
      }, '+=.20')
      .set(body, {
        overflow: 'auto',
      });
  };