import "../styles/layouts/center.scss";
// import SectionMe from './SectionMe';
//import SectionSkills from './SectionSkills';
import SectionProjects from "./SectionProjects";


function Center() {
    return (
      <main className="center">
        <div className="sections">
          
          {/* <SectionMe/> */}
          {/* <SectionSkills/>  */}
          <SectionProjects/>

        </div>
      </main>
    );
  }
  
  export default Center;