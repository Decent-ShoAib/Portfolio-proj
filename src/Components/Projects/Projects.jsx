import Card from '../Cards/Card' 
import './Project.css'
import va from '../../assets/va.png'
import fw from '../../assets//fw.png'
import bg from '../../assets/bg.png'
function Projects() {
  return (
    <div id="projects">
        <h1 id='projectH1'>2+ YEARS EXPERIENCED IN PROJECTS </h1>
        <div className="sliders">
            <Card title={'Visrtual Assistant'} image={va}/>
            <Card title={'Power Fitness'} image={fw}/>
            <Card title={'Remove BG'} image={bg}/>
            {/* <Card/>
            <Card/> */}
        </div>
    </div>
  )
}

export default Projects