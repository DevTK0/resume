import SectionHeader from '../Components/SectionHeader'

function Projects() {
    return (
      <div>
            <SectionHeader title="Projects" />
            <div class="font-bold"> <a href="https://gitlab.com/tko.developer.02/CakeChef"> CakeChef </a> </div>

            <ul class="mb-4 list-disc list-inside font-extralight">
                <li> A generic, configuration based binary file reader/writer built for systems which utilize binary files as a means of information transfer. </li>
                <li> Developed the application using Javascript and NodeJS. </li>
                {/* <li> Setup the CICD pipeline using Gitlab and Jenkins. </li>
                <li> Created documentation using X framework. </li> */}
            </ul>

      </div>
    );
  }
  
  export default Projects;
  