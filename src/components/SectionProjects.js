import "../styles/layouts/sectionProjects.scss";
import awesome from"../images/awesome-profile-cards.jpg";
import friends from "../images/friends-quotes.jpg";
import cocktails from "../images/big-apple-cocktails.jpg";
function SectionProjects() {
    return (
      <div className="sectionProjects">
        <h3 className='titleSectionProjects'>My Projects</h3> 
      <ul className='sectionProjectsList'>



        <li className='sectionProjectsItem'>
          <article className='projectsArticle'>
            <a href="https://project-module-4-team-6.herokuapp.com/" alt="project 1" className='sectionProjectsTitle'>Awesome-Profile-Cards</a>
            <img src={awesome} alt="project1" className='sectionProjectsPhoto'/>
            <p className='sectionProjectText'>Awesome-Profile-Cards is a tool for you to create your virtual business cards and share them with your contacts or on twitter.</p>
          </article>
        </li>


        <li className='sectionProjectsItem'>
          <article className='projectsArticle'>
            <a href="https://beta.adalab.es/modulo-3-evaluacion-intermedia-ruadaslucia/" alt="project 2" className='sectionProjectsTitle'>friends</a>
            <img src={friends} alt="project2" className='sectionProjectsPhoto'/>
            <p className='sectionProjectText'>Friends quotes is a project that filters the most memorable quotes from the TV series Friends using data from an API.</p>
          </article>
        </li>


        <li className='sectionProjectsItem'>
          <article className='projectsArticle'>
            <a href="https://ruadaslucia.github.io/big-aple-cocktails/" alt="project 3" className='sectionProjectsTitle'>coctails</a>
            <img src={cocktails} alt="project3" className='sectionProjectsPhoto'/>
            <p className='sectionProjectText'>Big apple cocktails , is a project that filters and adds to favorites drinks that are obtained with the data of an API.</p>
          </article>
        </li>
        
      </ul>
      <a href="https://github.com/ruadaslucia?tab=repositories" className='more'>See more...</a>
      </div>
    );
  }
  
  export default SectionProjects;