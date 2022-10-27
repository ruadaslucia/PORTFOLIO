import "../styles/layouts/center.scss";

import MainSection1 from './MainSection1';
import MainSection2 from './MainSection2';
function Center() {
    return (
      <main className="center">
        <div className="sections">
          <div className='titleCenter'>main</div>
          <MainSection1/>
          <MainSection2/>
        </div>
      </main>
    );
  }
  
  export default Center;