import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';



function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#21325e'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2014-2018'
        iconStyle={{background:"#21325e", color: "#efefef"}}
        icon={<SchoolIcon/>}
        >
        <h3 className="vertical-timeline-element-title">John Hancock College Prep | Chicago,IL</h3>
        <p>After graduating I gained a lot of interest in the stock market</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2018-2021'
        iconStyle={{background:"#FFE569", color: "#0F0E0E"}}
        icon={<WorkIcon/>}
        >
        <h3 className="vertical-timeline-element-title">Popeyes | Shift Manager</h3>
        <p>I was initially a cashier but after a year I gained my manager's trust and was promoted to Shift Manager while in school full time</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2021 - 2023'
        iconStyle={{background:"#FFE569", color: "#0F0E0E"}}
        icon={<WorkIcon/>}
        >
        <h3 className="vertical-timeline-element-title">Amazon | UPS</h3>
        <p>Worked as a Problem Solver at Amazon and got promoted to Assistant Supervisor at UPS to use their tuition help to cover my semesters</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2018 - December 2022'
        iconStyle={{background:"#21325e", color: "#efefef"}}
        icon={<SchoolIcon/>}
        >
        <h3 className="vertical-timeline-element-title">University of Illinois at Chicago | Chicago,IL</h3>
        <p>Graduated with a Bachelors of Science, Mathematical Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='December 2022- May 2023'
        iconStyle={{background:"#82CD47", color: "#efefef"}}
        icon={<CandlestickChartIcon/>}
        >
        <h3 className="vertical-timeline-element-title">Short-lived Option Trader</h3>
        <p>Throughout my time at University I had been learning more about the stock market and traded options.<br></br>
        Year One: $0 - Year Two: $10k <br></br> Year Three: $-3k - Year Four: $9k <br></br>
        After graduating I funded my account with $5k and at it's peak made it to $21k. Unfortunately I had spent $10k and lost $5k in a month
        which made me realize that I disliked the uncertainty of income. </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='May 2023 - ???'
        iconStyle={{background:"#21325e", color: "#efefef"}}
        icon={<WorkIcon/>}
        >
        <h3 className="vertical-timeline-element-title">Job Hunting</h3>
        <p>Please Hire Me</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience