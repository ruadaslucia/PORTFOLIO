import "../styles/layouts/center.scss";
// import SectionMe from './SectionMe';
import SectionSkills from './SectionSkills';


function Center() {
    return (
      <main className="center">
        <div className="sections">
          
          {/* <SectionMe/> */}
          <SectionSkills/>

        </div>
      </main>
    );
  }
  
  export default Center;