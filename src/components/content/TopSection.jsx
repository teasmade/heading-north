import css from './TopSection.module.css';

function TopSection() {
  return (
    <div className={css.topSection}>
      <h2>Right Here, Right Now</h2>
      <p>
        I'm a <span className={css.highlight}>junior developer</span> currently learning the trade
        with <span className={css.highlight}>React, Node and MySQL.</span> My pre-dev background is
        in sales and language teaching.{' '}
      </p>
      <p>
        <span className={css.highlight}>Fluent,</span> targeted{' '}
        <span className={css.highlight}>communication,</span> efficient{' '}
        <span className={css.highlight}>organisation</span> and adaptation to new{' '}
        <span className={css.highlight}>learning </span>
        contexts are some of my prior <span className={css.highlight}>strengths.</span> I've found
        they retain their value as this journey continues...
      </p>
      <p>
        I'm based in <span className={css.highlight}>Nantes,</span> France, and am currently looking
        for <span className={css.highlight}>interesting opportunities</span> in the region, or
        remote CET, for <span className={css.highlight}>junior-level</span> roles or internships
        starting from <span className={css.highlight}>August 2021.</span>
      </p>
      <p>
        <span className={css.highlight}>// TODO:</span> my current learning goals are{' '}
        <span className={css.highlight}>Typescript, GraphQL and Tailwind,</span> with side interests
        in creative coding with <span className={css.highlight}>p5.js and D3.js.</span>
      </p>
    </div>
  );
}

export default TopSection;
