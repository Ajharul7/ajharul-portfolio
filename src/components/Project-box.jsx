import "./Project.css";

const Projectbox = (props) =>{
    return (<>
        <div className="box">
        <img src={`${props.imgsrc}`} className="img-1"/>
        <h1 className="project-title"><b>{props.title}</b></h1>
        <p className="para-1st">
        <b>&#8226;</b> {props.para} <span className="a-bit-left">
        {props.parasub}</span><br/>
        <b>&#8226;</b>{props.paratwo}<span className="a-bit-left">
        {props.paratwosub}</span>
        <br/>
        <a href={`${props.gitlink}`} className="links-container">Github Link</a>
        <a href={`${props.livelink}`} className="links-container-1">Live Link</a>
         </p>
    </div>
    </>
    )
}

export default Projectbox;