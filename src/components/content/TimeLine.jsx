/* eslint-disable react/jsx-no-undef */
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import css from './TimeLine.module.css';

function TimeLine({ translate }) {
  return (
    <div className={css.timeline}>
      <div className={css.desktopFlexWrapper}>
        <div className={css.desktopFlexItem}>
          {translate ? <h2>Projets et travaux récents</h2> : <h2>Recent Work & Projects</h2>}
          <VerticalTimeline className={css.timeLineTrunk} animate={false} layout='1-column-right'>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: '#7cccf566' }}
              date={translate ? 'Mars - juillet 2021' : 'March - July 2021'}
              iconStyle={{ background: '#ddffff', color: '#ddffff' }}
              iconClassName={css.timeLineNode}
              textClassName={css.timeLineBox}
              dateClassName={css.timeLineDate}
              // icon={<WorkIcon />}
            >
              {translate ? (
                <>
                  {' '}
                  <h3 className='vertical-timeline-element-title'>Apprenti développeur</h3>
                  <h4 className='vertical-timeline-element-subtitle'>Wild Code School, Nantes</h4>
                  <p>
                    Formation à temps plein en développement web front et back avec React.js,
                    Node.js, MySQL et Express.
                  </p>
                  <p>
                    L'accent est mis sur l'importance des du travail en agilité, le contrôle des
                    versions avec Git et Github et le contrôle de qualité de code avec ESLint.
                  </p>
                </>
              ) : (
                <>
                  {' '}
                  <h3 className='vertical-timeline-element-title'>Developer-in-training</h3>
                  <h4 className='vertical-timeline-element-subtitle'>Wild Code School, Nantes</h4>
                  <p>
                    Full time training in front and back end web development using React.js,
                    Node.js, MySQL and Express.
                  </p>
                  <p>
                    Emphasis on the importance of Agile work practices, version control using Git
                    and Github, quality control using ESLint.
                  </p>
                </>
              )}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: '#7cccf566' }}
              date={translate ? 'Mai - juillet 2021' : 'May - July 2021'}
              iconStyle={{ background: '#ddffff', color: '#ddffff' }}
              iconClassName={css.timeLineNode}
              textClassName={css.timeLineBox}
              dateClassName={css.timeLineDate}
              // icon={<WorkIcon />}
            >
              {translate ? (
                <>
                  {' '}
                  <h3 className='vertical-timeline-element-title'>
                    Application de contrôle des prix
                  </h3>
                  <h4 className='vertical-timeline-element-subtitle'>www.plusdebad.com</h4>
                  <p>
                    Mon projet final pendant la formation à la Wild Code School, Nantes, en
                    travaillant pour un client externe sur un problème du monde réel dans une équipe
                    de 5 personnes.
                  </p>
                  <p>
                    Application à livrer en juillet 2021 : un système automatisant les processus
                    d'étiquettage des produits, basé sur des données dynamiques de prix et de stock,
                    pour une chaîne de 7 magasins de sport spécialisés.
                  </p>
                  <p>
                    Travaillant en sprints d'une semaine, nous développerons notre propre back-end,
                    API et front-end, en utilisant React, Node et MySQL.
                  </p>
                </>
              ) : (
                <>
                  {' '}
                  <h3 className='vertical-timeline-element-title'>Pricing Control Application</h3>
                  <h4 className='vertical-timeline-element-subtitle'>www.plusdebad.com</h4>
                  <p>
                    My final project during training at the Wild Code School, Nantes, working for an
                    external client on a real-world problem in a team of 5.
                  </p>
                  <p>
                    Application to be delivered July 2021: a system automating product ticketing
                    processes, based on dynamic price and stock data, for a chain of 7 specialist
                    sports shops.
                  </p>
                  <p>
                    Working in 1 week sprints, we will develop our own back-end, API and front-end,
                    usinng React, Node and MySQL.
                  </p>
                </>
              )}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: '#7cccf566' }}
              date={translate ? 'Mai 2021' : 'May 2021'}
              iconStyle={{ background: '#ddffff', color: '#ddffff' }}
              iconClassName={css.timeLineNode}
              textClassName={css.timeLineBox}
              dateClassName={css.timeLineDate}
              // icon={<WorkIcon />}
            >
              {translate ? (
                <>
                  {' '}
                  <h3 className='vertical-timeline-element-title'>Entrée gagnante du Hackathon</h3>
                  <h4 className='vertical-timeline-element-subtitle'>To the Moon!</h4>
                  <p>
                    Je faisais partie d'une équipe de 4 personnes qui a remporté un hackathon de 2
                    jours organisé pendant la formation à la Wild Code School.
                  </p>
                  <p>
                    Nous avons développé un jeu d'aventure spatiale, en utilisant React et p5.js..
                  </p>
                </>
              ) : (
                <>
                  {' '}
                  <h3 className='vertical-timeline-element-title'>Hackathon Winning Entry</h3>
                  <h4 className='vertical-timeline-element-subtitle'>To the Moon!</h4>
                  <p>
                    I was part of a team of 4, winning a 2 day hackathon run during training at the
                    Wild Code School.
                  </p>
                  <p>We developed a playable space-adventure game, using React and p5.js.</p>
                </>
              )}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: '#7cccf566' }}
              date={translate ? 'Avril - mai 2021' : 'April - May 2021'}
              iconStyle={{ background: '#ddffff', color: '#ddffff' }}
              iconClassName={css.timeLineNode}
              textClassName={css.timeLineBox}
              dateClassName={css.timeLineDate}
              // icon={<WorkIcon />}
            >
              {translate ? (
                <>
                  {' '}
                  <h3 className='vertical-timeline-element-title'>Développement React + API</h3>
                  <h4 className='vertical-timeline-element-subtitle'>BiclooApp</h4>
                  <p>
                    2ème projet dans le cadre de la formation à la Wild Code School ; notre brief
                    était de créer un site avec React en utilisant de manière intéressante les
                    géodonnées de l'API publique de Nantes Metropôle.
                  </p>
                  <p>
                    Mon équipe de 5 personnes a développé une application pour ludifier Bicloo, le
                    service de location de vélos à la demande de Nantes.
                  </p>
                  <p>
                    Nous avons utilisé React, avec Leaflet pour l'affichage dynamique des données
                    cartographiques. Nous avons dépassé le brief du projet dans le temps imparti, en
                    ajoutant l'authentification et le stockage des données utilisateurs avec
                    Firebase.
                  </p>
                </>
              ) : (
                <>
                  {' '}
                  <h3 className='vertical-timeline-element-title'>React + API Development</h3>
                  <h4 className='vertical-timeline-element-subtitle'>BiclooApp</h4>
                  <p>
                    2nd project during training at the Wild Code School; our brief was to create a
                    site with React using geodata from Nantes Metropôle's public API in an
                    interesting way.
                  </p>
                  <p>
                    My team of 5 developed an app to gameify Bicloo, Nantes' on-demand bike rental
                    service.
                  </p>
                  <p>
                    We used React alongside Leaflet for dynamic map data display. We exceeded the
                    project brief in the time allocated, adding authentication and user data storage
                    using Firebase.
                  </p>
                </>
              )}
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
