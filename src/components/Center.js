import "../styles/layouts/center.scss";

import SectionMe from './SectionMe';
import MainSection2 from './MainSection2';
function Center() {
    return (
      <main className="center">
        <div className="sections">
          <div className='titleCenter'>center</div>
          <SectionMe/>
          <MainSection2/>
        </div>
      </main>
    );
  }
  
  export default Center;