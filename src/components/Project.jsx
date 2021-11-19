import "./Project.css";
import Projectbox from "./Project-box";

const Project = () => {
    return (<>
    <Projectbox imgsrc="https://i.ibb.co/6gHm3KC/D.png" title="Silcharit"
      para="Silcharit is a social media website for a city" parasub = "based audience."
      paratwo =" Here users can signup/login and interact " paratwosub="with each other."
      gitlink ="https://github.com/Ajharul7/Silcharit" livelink="http://www.silcharit.epizy.com"
    />
    <Projectbox imgsrc="https://i.ibb.co/9vyDT6F/socatic-img.png" title="Socatic"
      para="Socatic is upgarded version of Silcharit" parasub = "made with Django."
      paratwo =" It has extra features like Animal Rescue, " paratwosub="Blood Donation,Plantation Drive,etc."
      gitlink ="https://github.com/Ajharul7/Django/tree/master/Socatic" livelink="http://socatic.herokuapp.com/"
    />
    <Projectbox imgsrc="https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F07%2FDiscordhed.jpg&signature=257006462207519026282958af872e5c" title="Melbot"
      para="A Discord Bot for Web Developer created " parasub = "using Node.js"
      paratwo =" It can describe and copy any HTML CSS JS " paratwosub="tags.It uses TTS and STT feature."
      gitlink ="#" livelink="#"
    />
    <Projectbox imgsrc="https://i.ibb.co/HYS6mzN/a-blog.png" title="Anonymous Blog"
      para="A Blog Anonymous Website where user" parasub = " can post Blog anonymously."
      paratwo =" It is created using MERN Stack " paratwosub="and stores information in cloud."
      gitlink ="https://github.com/Ajharul7/blog-website" livelink="https://myanonymous-blog.herokuapp.com/"
    />
    <Projectbox imgsrc="https://res.cloudinary.com/practicaldev/image/fetch/s--eIAhDDOm--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/orzqipasg2192qrw0kho.png" title="GoogleAutoMeet"
      para="A simple python script which lets you join" parasub = "Google Meet Class automatically"
      paratwo =" It uses the module selenium to automate the " paratwosub="process."
      gitlink ="https://github.com/Ajharul7/GoogleAutoMeet" livelink="#"
    />
    <Projectbox imgsrc="https://i.ibb.co/K51GNzk/promote-here.png" title="PromoteHere"
      para="Website that act as a middle man for Social" parasub = " Media Pages and Business/Company."
      paratwo =" Here Brands and Company can promote " paratwosub="their products with ease."
      gitlink ="https://github.com/Ajharul7/Django/tree/master/promotehere" livelink="http://promotehere.herokuapp.com/"
    />
    </div>
    </>
    )
}

export default Project;
