import css from './Intro.module.css';

function Intro() {
  return (
    <div>
      <div className={css.intro}>
        <h2>Web Developer</h2>
        <p className={css.paraBlock}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi aspernatur dolores odit
          dolor sit amet consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quia. Sunt recusandae
          ipsa.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quia. Sunt recusandae
          ipsa.
        </p>
      </div>
    </div>
  );
}

export default Intro;
