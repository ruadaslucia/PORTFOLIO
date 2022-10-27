import "../styles/layouts/mainSection1.scss";
import luciasPhoto from"../images/portfolioPhoto.jpg";

function SectionMe() {
    return (
      <div className='sectionMe'>
        <img src={luciasPhoto} alt="Photo ruadaslucia" className='luciasPhoto'/>
        <h2 className='sectionMeTitle'>Hi, i'm Lucía</h2>
      </div>
    );
  }
  
  export default SectionMe;