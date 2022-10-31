import luciasPhoto from"../images/portfolioPhoto.jpg";

function SectionMe() {
    return (
      <>
      
      <div className='sectionMe'>
        <div className='sectionMeTP'>
          <h2 className='sectionMeTitle'>Hi, I'm Lucía</h2>
          <img src={luciasPhoto} alt="lucia" className='luciasPhoto'/>
        </div>
        <p className='sectionMeText'>
          I'm from Pontevedra - Galicia. <br/>In June I finished a web programming bootcamp. I hope that my portfolio gets your attention and your company's.
        </p>
        
      </div></>
    );
  }
  
  export default SectionMe;