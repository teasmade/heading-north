import css from './Nav.module.css';
import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

function Nav() {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  return (
    <div className={css.nav}>
      <h1 className={hideOnScroll ? css.hidden : css.notHidden}>Thomas Allen</h1>
      <nav>
        <span className={css.home}>H</span>
        <span className={css.lang}>En / Fr</span>
        <span className={css.burger}>///</span>
      </nav>
    </div>
  );
}

export default Nav;
