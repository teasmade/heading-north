/* eslint-disable react/jsx-no-comment-textnodes */
import css from './TopSection.module.css';

function TopSection({ translate }) {
  return (
    <div className={css.topSection}>
      <div className={css.desktopFlexWrapper}>
        <div className={css.desktopFlexItem}>
          {translate ? (
            <>
              <h2>Ici, Maintenant...</h2>
              <p>
                Je suis un <span className={css.highlight}>développeur junior</span> en
                apprentissage du métier avec{' '}
                <span className={css.highlight}>React, Node et MySQL.</span> Auparavant, je
                travaillais dans la gestion des ventes et l'enseignement des langues.
              </p>
              <p>
                <span className={css.highlight}>La communication</span> fluide et ciblée,{' '}
                <span className={css.highlight}>l'organisation</span> efficace et{' '}
                <span className={css.highlight}>l'adaptation</span> à de nouveaux contextes
                d'apprentissage sont quelques-un de{' '}
                <span className={css.highlight}>mes atouts</span> préalables. J'ai constaté qu'ils
                conservent leur valeur au fur et à mesure que ce voyage se poursuit...
              </p>
              <p>
                Je suis basé à <span className={css.highlight}>Nantes,</span> et je suis
                actuellement à la recherche{' '}
                <span className={css.highlight}>d'opportunités intéressantes</span> dans la région,
                ou à distance en CET, pour des rôles de{' '}
                <span className={css.highlight}>niveau junior</span> ou des stages{' '}
                <span className={css.highlight}>à partir d'août 2021.</span>
              </p>
              <p>
                <span className={css.highlight}>// TODO:</span> mes objectifs d'apprentissage
                actuels sont <span className={css.highlight}>Typescript, GraphQL et Tailwind;</span>{' '}
                j'ai des intérêts secondaires dans le code créatif avec{' '}
                <span className={css.highlight}>p5.js et D3.js.</span>
              </p>
            </>
          ) : (
            <>
              {' '}
              <h2>Right Here, Right Now</h2>
              <p>
                I'm a <span className={css.highlight}>junior developer</span> currently learning the
                trade with <span className={css.highlight}>React, Node and MySQL.</span> My pre-dev
                background is in sales and language teaching.{' '}
              </p>
              <p>
                <span className={css.highlight}>Fluent,</span> targeted{' '}
                <span className={css.highlight}>communication,</span> efficient{' '}
                <span className={css.highlight}>organisation</span> and adaptation to new{' '}
                <span className={css.highlight}>learning </span>
                contexts are some of my prior <span className={css.highlight}>strengths.</span> I've
                found they retain their value as this journey continues...
              </p>
              <p>
                I'm based in <span className={css.highlight}>Nantes,</span> France, and am currently
                looking for <span className={css.highlight}>interesting opportunities</span> in the
                region, or remote CET, for <span className={css.highlight}>junior-level</span> roles
                or internships starting from <span className={css.highlight}>August 2021.</span>
              </p>
              <p>
                <span className={css.highlight}>// TODO:</span> my current learning goals are{' '}
                <span className={css.highlight}>Typescript, GraphQL and Tailwind,</span> with side
                interests in creative coding with{' '}
                <span className={css.highlight}>p5.js and D3.js.</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopSection;
