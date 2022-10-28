import "../styles/layouts/sectionMe.scss";
import luciasPhoto from"../images/portfolioPhoto.jpg";

function SectionMe() {
    return (
      <div className='sectionMe'>
        <div className='sectionMeTP'>
          <h2 className='sectionMeTitle'>Hi, I'm Lucía</h2>
          <img src={luciasPhoto} alt="lucia" className='luciasPhoto'/>
        </div>
        <p className='sectionMeText'>
          I'm from Pontevedra - Galicia. In June I finished a web programming bootcamp. I hope that my portfolio gets your attention and your company's.
        </p>
        <div className='sectionMeText'>
        <h4 className='sectionMeTextH4'>My knowledge</h4>
        <p>Layout: HTML5; CSS3, CSS Flexbox and Grid, SASS. Responsive design, Mobile first. JavaScript basics. Creation of SPAs with React, Components and Props, Git and Github for version control. Slack, GitHub, VS Code, Terminal, Zeplin.</p> 
        </div>
      </div>
    );
  }
  
  export default SectionMe;