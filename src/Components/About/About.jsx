import './About.css'
import Card from '../Cards/Card'
import react from '../../assets/react.svg'
import mern from '../../assets/mern.png'
import nodeJs from '../../assets/Node.js_logo.svg.png'
function About() {
  return (
    <div id='about'>
      <div className="leftAbout">
        <div className="circle-Line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="aboutDetails">

          <div className="personalInfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span>Name : </span>Muhammad Shaoib Javed</li>
              <li><span>Age : </span>22</li>
              <li><span>Gender : </span>Male</li>
            </ul>
          </div>

          <div className="education">
            <h1>Education</h1>
            <ul>
              <li><span>Degree : </span>Enter</li>
              <li><span>Branch : </span>Computer Science</li>
            </ul>
          </div>

          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>MERN Stack Developer</li>
              <li>CIT</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightAbout">
        <Card title={'MERN Stack Developer'} image={mern}/>
        <Card title={'React JS'} image={react}/>
        <Card title={'Node JS'} image={nodeJs}/>
      </div>
    </div>
  )
}

export default About