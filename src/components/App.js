import'../styles/main.scss';
import Header from "./Header";
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
        <Route path="/" element={<SectionMe/>} />
        <Route path="/skills"element={<SectionSkills/>}/>
        <Route path="/projects"element={<SectionProjects/>}/>
        <Route path="/rrss"element={<SectionRrss/>}/>        
    </Routes>
    <Footer/>  
    </>
  );
}

export default App;

