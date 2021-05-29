import css from './Intro.module.css';

function Intro() {
  return (
    <div>
      <div className={css.intro}>
        <h1>Thomas Allen</h1>
        <h2>Web Developer</h2>
        <div className={css.paraBlock}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi aspernatur dolores
            odit dolor sit amet consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quia. Sunt
            recusandae ipsa.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quia. Sunt
            recusandae ipsa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
