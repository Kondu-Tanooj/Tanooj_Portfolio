import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>History</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="2024 Nov - 2025 Jan"
          iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Freelancer</h3>
          <h4 className="vertical-timeline-element-subtitle">IBOT ENERGY SYSTEMS INDIA PVT LTD</h4>
          <p>
          Worked as a freelancer at IBOT ENERGY SYSTEMS INDIA PVT LTD, focusing on identifying and resolving issues in APEPDCL's DLMS meters, particularly related to the coding for pinging new servers. My primary responsibilities included resolving issues related to the web application that supports smart metering systems. 
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Member, Swecha AP</h3>
          <h4 className="vertical-timeline-element-subtitle">NPO, Andhra Pradesh, India</h4>
          <p>
            Actively contributing as a member of Swecha AP, a Non-Profit Organization focused on bridging the digital divide and empowering communities through technology. Swecha AP strives to create a societal impact by promoting equitable access to digital technology and responsible tech use. The organization heavily relies on open-source technologies, advocating for their use to create sustainable solutions that benefit communities and foster collaborative development.
          </p>
        </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Volunteer, MVGR_SLC</h3>
            <h4 className="vertical-timeline-element-subtitle">MVGR(A), Vizianagaram, India</h4>
            <p>
              Actively contributing to open-source projects and sharing knowledge with students by conducting bootcamps as a speaker.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Second Place Winner</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Central Zone Football (Men's) Inter-Collegiate Tournament
            </h4>
            <h5 className="vertical-timeline-element-subtitle">
              Organized by LBRC(A), Mylavaram, Andhra Pradesh, India
            </h5>
            <p>
              Achieved 2nd place in the prestigious Central Zone Football (Men's) Inter-Collegiate Tournament. It was an intense competition, and our team demonstrated excellent teamwork and determination throughout the event.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Student</h3>
            <h4 className="vertical-timeline-element-subtitle">Maharaj Vijayaram Gajapathi Raj College of Engineering (Autonomous),</h4>
            <h5 className="vertical-timeline-element-subtitle">Vizianagaram, Andhra Pradesh, India</h5>
            <p>
              Pursuing a B.Tech in Computer Science & Engineering with a CGPA of 8.62. Involved in various projects related to IoT, Machine Learning, Large Language Models and Web Development.
              Passionate about open-source contributions and software development.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;