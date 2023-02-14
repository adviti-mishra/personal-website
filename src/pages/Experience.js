import React from 'react'
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import LanguageIcon from '@material-ui/icons/Language';
import { Language } from '@material-ui/icons'
//import { School } from '@material-ui/icons'

function Experience() {
  return (
    //<div> Experience </div>

    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
         className="vertical-timeline-element--education"
         date = "2017-2018"
         iconStyle = {{background:"#3e497a", color:"#fff"}}
         icon={<SchoolIcon />}
         >
          <h3 className='vertical-timeline-element-title'> 
          The Interact Club of St. Gregorios High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            President
          </h4>
          <p> Led 150+ students in organizing and implementing social impact projects like setting up a library in a village, grain donation, old clothes donation, etc.</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            The Times Newspaper in Education
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Student Correspondent
          </h4>
          <p> Amongst the 35 students chosen out of 3000 across Mumbai to publish 50-word articles on current affairs and technology every week. </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Student Government
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Discipline Captain
          </h4>
          <p> Led the student government of 40 students in organizing events, helping maintain decorum in the school, etc. </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2019 - August 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Young Leaders for Active Citizenship
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Fellow
          </h4>
          <p> Participated in a program to learn more about what it means to be an active citizen while covering topics like privilege, governane, voting, public health, education, etc. </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">
            Angel Xpress
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Teacher
          </h4>
          <p> Taught math, science, and life skills to underprivileged children aged 8-10 on a weekly basis </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="October 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">
            TEDxYouth@NMS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            TEDx Speaker
          </h4>
          <p> Delivered a TEDx talk on my journey in becoming resilient as I discovered my passion for running </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2021 - July 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer and Product Management Intern - Yatra.com
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Project : Yatra Covid Connect
          </h4>
          <p> One of the product strategists and product managers of the digital repository of Covid-19 resources. Created and optimized workflows for collection and validation of 60,000+ entries while managing 800+ volunteers. </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2021 - May 2022"
          iconStyle={{ background: "#fff", color: "#3e497a" }}
          icon={<Language />}
        >
        <h3 className="vertical-timeline-element-title">
            optiMize Social Innovation Challenge
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Participant
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2022 - August 2022"
          iconStyle={{ background: "#fff", color: "#3e497a" }}
          icon={<Language />}
        >
        <h3 className="vertical-timeline-element-title">
            optiMize Summer Fellowship
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Summer Fellow
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2022 - December 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">
            Business + Tech
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Tech Literacy Program + Tech Innovation Jam
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2022 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">
            University of Michigan Computer Science Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Instructional Aide for EECS 280 (Porgramming and Data Structures)
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2022 - present"
          iconStyle={{ background: "#fff", color: "#3e497a" }}
          icon={<Language />}
        >
        <h3 className="vertical-timeline-element-title">
            optiMize
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Technology Peer Mentor
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2023 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">
            V1
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cohort Member
          </h4>
          <p> A student builder </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2023 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">
            MProduct
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cohort Member
          </h4>
          <p> An aspiring Product Manager </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
export default Experience