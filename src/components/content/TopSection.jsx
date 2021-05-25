import css from './TopSection.module.css';

function TopSection() {
  return (
    <div className={css.topSection}>
      <h2>Web Development</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore magnam rem distinctio
        quis, dignissimos deleniti consequuntur est tenetur natus impedit cum, autem, totam nisi
        adipisci dolorem! Consequuntur dignissimos qui suscipit.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore magnam rem distinctio
        quis, dignissimos deleniti consequuntur est tenetur natus impedit cum, autem, totam nisi
        adipisci dolorem! Consequuntur dignissimos qui suscipit.
      </p>
      <div className={css.trunkEnd}></div>
    </div>
  );
}

export default TopSection;
