import css from './Nav.module.css';
import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Switch from 'react-switch';

function Nav() {
  const [changeOnScroll, setChangeOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isChange = currPos.y < 30;
      if (isChange !== changeOnScroll) setChangeOnScroll(isChange);
    },
    [changeOnScroll],
    null,
    true
  );

  // TODO: Change naming to reflect language change
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    console.log(checked);
  };

  return (
    <div className={changeOnScroll ? css.nav : `${css.nav} ${css.scrollNav}`}>
      <h1 className={changeOnScroll ? css.hiddenTitle : css.notHiddenTitle}>Thomas Allen</h1>
      <nav className={changeOnScroll ? css.initialControls : css.scrolledControls}>
        <span className={css.lang}>
          En{' '}
          <Switch
            onChange={handleChange}
            checked={checked}
            onColor='#7CCCF5'
            offColor='#7CCCF5'
            height={35}
            width={60}
            offHandleColor='#ddffff'
            onHandleColor='#ddffff'
            uncheckedIcon={<div></div>}
            uncheckedHandleIcon={
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <mask id='a'>
                  <circle cx='256' cy='256' r='256' fill='#fff' />
                </mask>
                <g mask='url(#a)'>
                  <path
                    fill='#eee'
                    d='M0 0h47.4l76.4 21 65.4-21h33.4l34.2 16.6L289.4 0h33.4l70.4 22.8L464.8 0h15.8l12.2 7.3L512 0v47.3l-19.9 78 19.9 63.9v33.4l-16.4 30.6 16.4 36.2v33.4l-15.1 68.7 15.1 73.3v15.9l-7.8 10.9L512 512h-47.3l-71-17.5-70.9 17.5h-33.4l-30-19.7-36.8 19.7h-33.3l-63.7-20.2L47.3 512H31.4l-10.6-8L0 512v-47.3l22.8-79L0 322.9v-33.4l25.3-32L0 222.6v-33.4l22.2-64.6L0 47.2V31.4l8-7.8z'
                  />
                  <path
                    fill='#0052b4'
                    d='M47.4 0l141.8 142V0H47.4zm275.4 0v142l142-142h-142zM0 47.2v142h142L0 47.2zm512 .1L370.1 189.2H512V47.3zM0 322.8v141.9l141.9-141.9H0zm370 0l142 142v-142H370zM189.3 370l-142 142h142V370zm133.5.1V512h141.9L322.8 370.1z'
                  />
                  <path
                    fill='#d80027'
                    d='M222.6 0v222.6H0v66.8h222.6V512h66.8V289.4H512v-66.8H289.4V0h-66.8z'
                  />
                  <path
                    fill='#d80027'
                    d='M0 0v31.4l157.7 157.8h31.5L0 0zm480.6 0L322.8 157.7v31.5L512 0h-31.4zM189.2 322.8L0 512h31.4l157.8-157.7v-31.5zm133.6 0L511.9 512h.1v-31.3L354.3 322.8h-31.5z'
                  />
                </g>
              </svg>
            }
            checkedIcon={<div></div>}
            checkedHandleIcon={
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <mask id='a'>
                  <circle cx='256' cy='256' r='256' fill='#fff' />
                </mask>
                <g mask='url(#a)'>
                  <path fill='#eee' d='M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z' />
                  <path fill='#0052b4' d='M0 0h167v512H0z' />
                  <path fill='#d80027' d='M345 0h167v512H345z' />
                </g>
              </svg>
            }
            className={`react-switch ${css.toggle}`}
          />{' '}
          Fr
        </span>
      </nav>
      <span className={css.burger}>:</span>
    </div>
  );
}

export default Nav;
