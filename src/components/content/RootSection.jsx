import css from './RootSection.module.css';

function RootSection({ translate }) {
  return (
    <div className={css.rootSection}>
      <div className={css.desktopFlexWrapper}>
        <div className={css.desktopFlexItem}>
          {translate ? (
            <>
              {' '}
              <h2>Les Racines...</h2>
              <p className={css.highlight}>
                Je suis passé au développement web en 2020 - 2021, après avoir travaillé dans les
                ventes, les réservations et la gestion de l'expérience client dans le secteur du
                tourisme spécialisé.
              </p>
              <p className={css.aside}>
                J'ai appris à relever le défi du développement de systèmes de réservation
                personnalisés, au début en tant qu'amateur en utilisant Excel, Access et VBA pour
                bricoler des solutions "suffisantes".
              </p>
              <p className={css.aside}>
                Au fur et à mesure de la croissance de l'entreprise, je suis passé à la gestion des
                communications et de l'intégration côté client, en travaillant avec des développeurs
                externes (c'est-à-dire professionnels !).
              </p>
              <p className={css.aside}>
                En bref, le fait de voir des solutions élégantes aux problèmes que j'avais aimé
                résoudre dans le passé a vraiment suscité mon intérêt... et c'est ainsi que ma
                conversion a commencé.
              </p>
              <p className={css.highlight}>
                Plus tôt, j'ai étudié les langues et la linguistique à l'université, avant
                d'enseigner l'anglais en tant que langue étrangère à des adultes.
              </p>
              <p className={css.aside}>
                Arriver à comprendre les moindres détails de la syntaxe et de la grammaire du
                langage naturel et trouver la meilleure façon de les présenter sont des compétences
                qui me sont toujours utiles, tout comme ma compréhension de la diversité des styles
                d'apprentissage...
              </p>
              <p className={css.aside}>
                ...et enfin, mais non des moindres, c'était une perspective extrêmement bénéfique
                sur l'importance de la précision, de la patience et de l'empathie pour les étudiants
                de sujets difficiles...
              </p>
            </>
          ) : (
            <>
              {' '}
              <h2>The roots...</h2>
              <p className={css.highlight}>
                I moved into web development 2020 - 2021, having previously worked in sales,
                reservations and customer experience management in the specialist tourism sector.
              </p>
              <p className={css.aside}>
                I learnt about the challenge of developing custom booking systems, initially as a
                rank amateur using Excel, Access and VBA to hack together "good enough" solutions.
              </p>
              <p className={css.aside}>
                As the business grew, I moved to managing communications and client-side
                integration, working with external (i.e. professional!) developers.
              </p>
              <p className={css.aside}>
                In short, seeing elegant solutions to the problems I'd enjoyed struggling with in
                the past really captured my interest... and so the conversion began.
              </p>
              <p className={css.highlight}>
                Further back, I studied languages and linguistics at university, before teaching
                English as a foreign language to adults.
              </p>
              <p className={css.aside}>
                Understanding the fine details of natural language syntax and grammar and working
                out how best to present them are skills which still serve me well, as do my insights
                into the diversity of learning styles...
              </p>
              <p className={css.aside}>
                ...and finally, but by no means least, this was a hugely valuable perspective on the
                importance of precision, patience and empathy for students of difficult subjects...
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RootSection;
