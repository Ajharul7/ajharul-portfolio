import "./Main.css";
import {SiPython,SiJavascript,SiReact,SiHtml5, SiCss3, SiDjango} from "react-icons/si";
import {GrNode} from "react-icons/gr";


const Main = () => {
    return (<>
    <center><img src="https://i.ibb.co/vvHGwjQ/Remini20211031212640156.jpg" className="img" /></center>
    <div className="first-part">
    <h1 className="my-name"><b className="a-bit">Ajharul Haque Choudhury</b></h1>
    <br/>
    <h1 className="my-title"><b>Full Stack Web Developer</b></h1>
    <br/>
    <p className="my-para">Motivated, Logical and Organised individual with strong foundation in both Frontend and Backend Web Development.
    Excellent Teamworker with Good Communication Skills.
    Proficient in Python, Django, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, HTML, CSS, Bootstrap.
    </p><br/><br/><br/>
    <SiPython className="python-icon" />
    <SiJavascript className="javascript-icon" />
    <SiReact className="react-icon" />
    <GrNode className="node-icon" />
    <SiHtml5 className="html-icon" />
    <SiCss3 className="css-icon" />
    <SiDjango className="django-icon"/> <br/><br/>
    </div>
    </>)
    }

export default Main;
