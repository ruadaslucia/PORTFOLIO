import'../styles/app.scss';
import Header from "./Header";
import Center from "./Center";
import SectionMe from './SectionMe';
import SectionSkills from './SectionSkills';
import SectionProjects from "./SectionProjects";
import SectionRrss from "./SectionRrss";
import Footer from "./Footer";
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Center />} >
          <Route path="/me" element={<SectionMe/>}/>
          <Route path="/skills"element={<SectionSkills/>}/>
          <Route path="/projects"element={<SectionProjects/>}/>
          <Route path="/rrss"element={<SectionRrss/>}/>
        </Route>
    </Routes>
    <Footer/>  
    </>
  );
}

export default App;

