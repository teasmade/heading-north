import css from './Nav.module.css';

function Nav() {
  return (
    <nav className={css.nav}>
      <h1 className={css.title}>Thomas Allen</h1>
      <span className={css.home}>H</span>
      <span className={css.lang}>En / Fr</span>
      <span className={css.burger}>///</span>
    </nav>
  );
}

export default Nav;
