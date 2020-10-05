import React, { useState } from 'react';

import './ScrollToTopBtn.scss';
import { ReactComponent as Arrow } from 'assets/icons/up-arrow.svg';

const ScrollToTopBtn = () => {
  const [hasShowScrollBtn, setHasShowScrollBtn] = useState(false);

  const checkScrollTop = () => {
    if (!hasShowScrollBtn && window.pageYOffset > 200) {
      setHasShowScrollBtn(true);
    } else if (hasShowScrollBtn && window.pageYOffset <= 200) {
      setHasShowScrollBtn(false);
    }
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <button
      className="scroll-to-top"
      style={{ display: hasShowScrollBtn ? 'block' : 'none' }}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <Arrow className="arrow-icon" />
    </button>
  );
};

export default ScrollToTopBtn;
