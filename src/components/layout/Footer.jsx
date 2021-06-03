import css from './Footer.module.css';

function Footer({ translate }) {
  return (
    <div className={css.footer}>
      {translate ? (
        <>
          {' '}
          <h2 className={css.firstI}>Intéressant ?</h2>
          <h2 className={css.secondI}>Intéressé(e) ?</h2>
          <h2 className={css.thirdI}>Intéragir ...</h2>
        </>
      ) : (
        <>
          {' '}
          <h2 className={css.firstI}>Interesting ?</h2>
          <h2 className={css.secondI}>Interested ?</h2>
          <h2 className={css.thirdI}>Interact ...</h2>
        </>
      )}

      <div className={css.fourthI}>
        <div className={css.email}>
          <a href='mailto:thomasedwardallen@gmail.com'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              fill='#ddffff'
              viewBox='0 0 16 16'
            >
              <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z' />
            </svg>
            <span>thomasedwardallen@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
