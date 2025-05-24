import './Home.css'
import manImg from '../../assets/man.png'
import { TypeAnimation } from 'react-type-animation'

function Home() {
  return (
    <div id='home'>
      <div className="leftHome">
        <div className="homeDetails">
          <div className="line1">I AM</div>
          <div className="line2">Shoaib</div>
          <div className="line3">
            <TypeAnimation
              sequence={["MERN Stack Developer", 2000, "web developer", 1000]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </div>
          <button>Hire Me</button>
        </div>
      </div>
      <div className="rightHome">
        <img src={manImg} alt="" />
      </div>
    </div>
  )
}

export default Home