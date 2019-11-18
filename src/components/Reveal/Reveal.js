import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Waypoint } from 'react-waypoint';

const ns = `reveal`;

const Reveal = ({ children, config, callback }) => {
  const rootClassnames = classNames({
    [`${ ns }`]: true,
  });

  // settings composed from config props/default props
  const settings = {
    bottomOffset: config.bottomOffset || Reveal.defaultProps.config.bottomOffset,
    initialStyles: config.initialStyles || Reveal.defaultProps.config.initialStyles
  };

  // target
  const targetElement = useRef();

  // reveal state
  const [revealed, setRevealed] = useState(false);

  /**
   *  Responsible for setting revealed state
   *  to true or false
  */
  const handleReveal = ({ currentPosition }) => {
    if (currentPosition === 'above') {
      setRevealed(true);
    } else {
      // eslint-disable-next-line no-unneeded-ternary
      setRevealed(currentPosition === 'inside' ? true : false);
    }
  };

  const setScrollableAncestor = () => {
    if (typeof document !== `undefined`) {
      return window;
    }
    return null;
  };

  /**
   * Runs callback passed as prop with target element and
   * revealed state for animation manipulation
  */
  useEffect(() => {
    callback(targetElement.current, revealed);
  }, [revealed, callback]);

  return (
    <Waypoint
      onEnter={handleReveal}
      onLeave={handleReveal}
      bottomOffset={settings.bottomOffset}
      scrollableAncestor={setScrollableAncestor()}
    >
      <div
        ref={targetElement}
        className={rootClassnames}
        style={config.initialStyles}
      >
        {children}
      </div>
    </Waypoint>
  );
};

Reveal.defaultProps = {
  callback: (target, revealed) => {
    const elem = target;

    elem.style.opacity = (revealed === true ? 1 : 0);
    elem.style.transform = (revealed === true ? 'translateY(0)' : 'translateY(100px)');
  },
  config: {
    initialStyles: {
      transition: 'all 1.5s cubic-bezier(.165,.84,.44,1)',
      transformStyle: 'preserve-3d'
    },
    bottomOffset: '70px'
  }
};

export default Reveal;