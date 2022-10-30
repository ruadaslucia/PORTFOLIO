import "../styles/layouts/sectionRrss.scss";
function SectionRrss() {
    return (
      <div className="sectionRrss">
        <h3 className='sectionRrssTitle'>RR.SS.</h3>
        <h5 className='sectionRrssText'>You can find me here or write me directly on my <a href="mailto: ruadaslucia@gmail.com" className='sectionRrssEmail'> email</a>.</h5>
        <ul className='sectionRrssList'>
          <li className='sectionRrssItem'><a href="https://github.com/ruadaslucia">Github</a></li>
          <li className='sectionRrssItem'><a href="https://www.linkedin.com/in/ruadaslucia/">Linkedin</a></li>
          <li className='sectionRrssItem'><a href="https://twitter.com/ruadasLucia">Twitter</a></li>
        </ul>
        {/* <a href="mailto: ruadaslucia@gmail.com">My email</a> */}
      </div>
    );
  }
  
  export default SectionRrss;