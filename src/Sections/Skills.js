import SectionHeader from '../Components/SectionHeader'

function Skills() {

    return (
      <div>
            <SectionHeader title="Skills" />

            <div class="grid grid-cols-12">
                <span class="col-span-2 font-bold"> Languages </span>
                <span class="col-span-10 font-extralight"> Java, Javascript, HTML, CSS, Python </span>
                <div class="col-span-2 font-bold"> Frameworks </div>
                <div class="col-span-10 font-extralight"> Angular, React, Springboot, Kafka </div>
                <div class="col-span-2 font-bold"> DevOps </div>
                <div class="col-span-10 font-extralight"> Git, Docker </div>
            </div>
      </div>
    );
  }
  
  export default Skills;
  