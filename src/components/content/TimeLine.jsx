/* eslint-disable react/jsx-no-undef */
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import css from './TimeLine.module.css';

function TimeLine() {
  return (
    <div className={css.timeline}>
      <div className={css.desktopFlexWrapper}>
        <div className={css.desktopFlexItem}>
          <h2>Recent Work & Projects</h2>
          <VerticalTimeline className={css.timeLineTrunk} animate={false} layout='1-column-right'>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: '#7cccf566' }}
              date='March - July 2021'
              iconStyle={{ background: '#ddffff', color: '#ddffff' }}
              iconClassName={css.timeLineNode}
              textClassName={css.timeLineBox}
              dateClassName={css.timeLineDate}
              // icon={<WorkIcon />}
            >
              <h3 className='vertical-timeline-element-title'>Developer-in-training</h3>
              <h4 className='vertical-timeline-element-subtitle'>Wild Code School, Nantes</h4>
              <p>
                Full time training in front and back end web development using React.js, Node.js,
                MySQL and Express.
              </p>
              <p>
                Emphasis on the importance of Agile work practices, version control using Git and
                Github, quality control using ESLint.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: '#7cccf566' }}
              date='May - July 2021'
              iconStyle={{ background: '#ddffff', color: '#ddffff' }}
              iconClassName={css.timeLineNode}
              textClassName={css.timeLineBox}
              dateClassName={css.timeLineDate}
              // icon={<WorkIcon />}
            >
              <h3 className='vertical-timeline-element-title'>Pricing Control Application</h3>
              <h4 className='vertical-timeline-element-subtitle'>www.plusdebad.com</h4>
              <p>
                My final project during training at the Wild Code School, Nantes, working for an
                external client on a real-world problem in a team of 5.
              </p>
              <p>
                Application to be delivered July 2021: a system automating product ticketing
                processes, based on dynamic price and stock data, for a chain of 7 specialist sports
                shops.
              </p>
              <p>
                Working in 1 week sprints, we will develop our own back-end, API and front-end,
                usinng React, Node and MySQL.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: '#7cccf566' }}
              date='May 2021'
              iconStyle={{ background: '#ddffff', color: '#ddffff' }}
              iconClassName={css.timeLineNode}
              textClassName={css.timeLineBox}
              dateClassName={css.timeLineDate}
              // icon={<WorkIcon />}
            >
              <h3 className='vertical-timeline-element-title'>Hackathon Winning Entry</h3>
              <h4 className='vertical-timeline-element-subtitle'>To the Moon!</h4>
              <p>
                I was part of a team of 4, winning a 2 day hackathon run during training at the Wild
                Code School.
              </p>
              <p>We developed a playable space-adventure game, using React and p5.js.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: '#7cccf566' }}
              date='April - May 2021'
              iconStyle={{ background: '#ddffff', color: '#ddffff' }}
              iconClassName={css.timeLineNode}
              textClassName={css.timeLineBox}
              dateClassName={css.timeLineDate}
              // icon={<WorkIcon />}
            >
              <h3 className='vertical-timeline-element-title'>React + API Development</h3>
              <h4 className='vertical-timeline-element-subtitle'>BiclooApp</h4>
              <p>
                2nd project during training at the Wild Code School; our brief was to create a site
                with React using geodata from Nantes Metropôle's public API in an interesting way.
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
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
