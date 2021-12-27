import SectionHeader from '../Components/SectionHeader'

function Projects() {
    return (
      <div>
            <SectionHeader title="Projects" />
            <div class="font-bold"> <a href="https://gitlab.com/tko.developer.02/CakeChef"> CakeChef  </a> </div>
            
            <ul class="mb-4 list-disc list-inside font-extralight">
                <li> An Open Source, 2-in-1, binary file reader/writer. </li>
                <li> YAML based configuration with support for dynamic configuration (variables, loops, conditional statements). </li>
                <li> Support for various encoding/decoding formats (endianness, date/string/integer) </li>
                <li> Convenience utilities (crc32 generator) </li>
                <li> Built in Javascript and NodeJS. </li>
                <li> CICD Pipeline using Gitlab CI to run Jest tests. </li>
            </ul>

      </div>
    );
  }
  
  export default Projects;
  