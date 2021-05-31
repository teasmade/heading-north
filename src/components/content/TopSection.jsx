import css from './TopSection.module.css';

function TopSection() {
  return (
    <div className={css.topSection}>
      <h2>Right Here, Right Now</h2>
      <p>
        I'm a junior developer currently learning the trade with React, Node and MySQL. My pre-dev
        background is in sales and language teaching.{' '}
      </p>
      <p>
        Fluent, targeted communication, efficient organisation and adaptation to new learning
        contexts are some of my prior strengths; I've found they retain their value as this journey
        continues...
      </p>
      <p>
        I'm based in Nantes, France, and am currently looking for interesting opportunities in the
        region, or remote CET, for junior-level roles or internships starting from August 2021.
      </p>
      <div className={css.trunkEnd}></div>
    </div>
  );
}

export default TopSection;
