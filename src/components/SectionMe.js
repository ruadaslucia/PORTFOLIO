import luciasPhoto from '../images/portfolioPhoto.jpg';

function SectionMe() {
    return (
      <>      
        <div className='sectionMe'>
          <div className='sectionMe__tp'>
            <h2 className='sectionMe__tp--title'>Hi, I'm Lucía</h2>
            <img src={luciasPhoto} alt="lucia" className='sectionMe__tp--luciasPhoto'/>
          </div>

          <p className='sectionMe__text'>
            I'm from Pontevedra - Galicia. <br/>In June I finished a web programming bootcamp. I enjoy the artistic part of programing and I hope that my portfolio gets your attention and your company's.
          </p>        
        </div>
      </>
    );
  }
  
  export default SectionMe;