import '../styles/main.scss';
import Header from './Header';
import SectionMe from './SectionMe';
import SectionSkills from './SectionSkills';
import SectionProjects from './SectionProjects';
import SectionRrss from './SectionRrss';
import Footer from './Footer';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/PORTFOLIO" element={<SectionMe />} />
        <Route path="/skills" element={<SectionSkills />} />
        <Route path="/projects" element={<SectionProjects />} />
        <Route path="/rrss" element={<SectionRrss />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
