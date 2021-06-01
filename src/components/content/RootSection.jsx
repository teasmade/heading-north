import css from './RootSection.module.css';

function RootSection() {
  return (
    <div className={css.rootSection}>
      <div className={css.desktopFlexWrapper}>
        <div className={css.desktopFlexItem}>
          <h2>The roots...</h2>
          <p className={css.highlight}>
            I moved into web development 2020 - 2021, having previously worked in sales,
            reservations and customer experience management in the specialist tourism sector.
          </p>
          <p className={css.aside}>
            I learnt about the challenge of developing custom booking systems, initially as a rank
            amateur using Excel, Access and VBA to hack together "good enough" solutions.
          </p>
          <p className={css.aside}>
            As the business grew, I moved to managing communications and client-side integration,
            working with external (i.e. professional!) developers.
          </p>
          <p className={css.aside}>
            In short, seeing elegant solutions to the problems I'd enjoyed struggling with in the
            past really captured my interest... and so the conversion began.
          </p>
          <p className={css.highlight}>
            Further back, I studied languages and linguistics at university, before teaching English
            as a foreign language to adults.
          </p>
          <p className={css.aside}>
            Understanding the fine details of natural language syntax and grammar and working out
            how best to present them are skills which still serve me well, as do my insights into
            the diversity of learning styles...
          </p>
          <p className={css.aside}>
            ...and finally, but by no means least, this was a hugely valuable perspective on the
            importance of precision, patience and empathy for students of difficult subjects...
          </p>
        </div>
      </div>
    </div>
  );
}

export default RootSection;
