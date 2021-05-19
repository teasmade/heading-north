import css from './Intro.module.css';

function Intro() {
  return (
    <div className={css.intro}>
      <h1>Thomas Allen</h1>
      <p className={css.paraBlock}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi aspernatur dolores odit
        dolor sit amet consectetur, adipisicing inventore ratione.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quia. Sunt recusandae
        ipsa.
      </p>
    </div>
  );
}

export default Intro;
