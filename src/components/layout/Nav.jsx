import css from './Nav.module.css';
import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

function Nav() {
  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 200ms ease-in',
  });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > 100;

      const shouldBeStyle = {
        // visibility: isVisible ? 'visible' : 'hidden',
        transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
        // transform: isVisible ? 'none' : 'translate(0, -100%)',
        display: isVisible ? 'flex' : 'inherit',
      };

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;

      setHeaderStyle(shouldBeStyle);
    },
    [headerStyle]
  );

  return (
    <nav className={css.nav} style={{ ...headerStyle }}>
      <span className={css.home}>H</span>
      <span className={css.lang}>En / Fr</span>
      <span className={css.burger}>///</span>
    </nav>
  );
}

export default Nav;
