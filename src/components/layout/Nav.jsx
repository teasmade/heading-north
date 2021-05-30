import css from './Nav.module.css';
import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

function Nav() {
  const [changeOnScroll, setChangeOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isChange = currPos.y > prevPos.y;
      if (isChange !== changeOnScroll) setChangeOnScroll(isChange);
    },
    [changeOnScroll]
  );

  return (
    <div className={css.nav}>
      <h1 className={changeOnScroll ? css.hiddenTitle : css.notHiddenTitle}>Thomas Allen</h1>
      <nav className={changeOnScroll ? css.initialControls : css.scrolledControls}>
        <span className={css.lang}>En / Fr</span>
        <span className={css.burger}>///</span>
      </nav>
    </div>
  );
}

export default Nav;
