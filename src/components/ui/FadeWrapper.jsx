import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

function FadeWrapper(props) {
  const [fadeStyle, setFadeStyle] = useState({
    transition: 'all 200ms ease-in',
  });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > 100;
      console.log(currPos.y);
      console.log(prevPos.y);
      console.log(window.innerHeight);

      const shouldBeStyle = {
        // visibility: isVisible ? 'visible' : 'hidden',
        transition: `all 600ms ${isVisible ? 'ease-in' : 'ease-out'}`,
        opacity: isVisible ? 0 : 1,
      };

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(fadeStyle)) return;

      setFadeStyle(shouldBeStyle);
    },
    [fadeStyle],
    null,
    true
  );
  return <div style={{ ...fadeStyle }}>{props.children}</div>;
}

export default FadeWrapper;
