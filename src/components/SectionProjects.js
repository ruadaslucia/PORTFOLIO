import awesome from"../images/awesome-profile-cards.jpg";
import friends from "../images/friends-quotes.jpg";
import cocktails from "../images/big-apple-cocktails.jpg";
function SectionProjects() {
    return (
      <div className="sectionProjects">
        <h3 className='sectionProjects__title'>My Projects</h3> 
        <ul className='sectionProjects__list'>



          <li className='item'>
            <article className='item__article'>
              <a href="https://project-module-4-team-6.herokuapp.com/" alt="project 1" className='item__article--title'>Awesome-Profile-Cards</a>
              <img src={awesome} alt="project1" className='item__article--photo'/>
              <p className='item__article--text'>Awesome-Profile-Cards is a tool for you to create your virtual business cards and share them with your contacts or on twitter.</p>
            </article>
          </li>


          <li className='item'>
            <article className='item__article'>
              <a href="https://beta.adalab.es/modulo-3-evaluacion-intermedia-ruadaslucia/" alt="project 2" className='item__article--title'>friends</a>
              <img src={friends} alt="project2" className='item__article--photo'/>
              <p className='item__article--text'>Friends quotes is a project that filters the most memorable quotes from the TV series Friends using data from an API.</p>
            </article>
          </li>


          <li className='item'>
            <article className='item__article'>
              <a href="https://ruadaslucia.github.io/big-aple-cocktails/" alt="project 3" className='item__article--title'>coctails</a>
              <img src={cocktails} alt="project3" className='item__article--photo'/>
              <p className='item__article--text'>Big apple cocktails , is a project that filters and adds to favorites drinks that are obtained with the data of an API.</p>
            </article>
          </li>
          
        </ul>
        <a href="https://github.com/ruadaslucia?tab=repositories" className='sectionProjects__more'>See more...</a>
      </div>
    );
  }
  
  export default SectionProjects;