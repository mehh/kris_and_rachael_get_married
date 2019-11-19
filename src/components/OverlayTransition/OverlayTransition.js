import classNames from 'classnames';
import React from 'react';

const nsBase = 'component';
const ns = `${ nsBase }-overlay-transition`;

const OverlayTransition = () => {
  const rootClassnames = classNames({
    [`${ ns }`]: true
  });

  return (
    <div id={'overlay'} className={rootClassnames}>
      <div className={`${ ns }__background`} />
    </div>
  );
};

export default OverlayTransition;