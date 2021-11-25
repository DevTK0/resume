import SectionHeader from '../Components/SectionHeader'

function Skills() {

    return (
      <div>
            <SectionHeader title="Skills" />

            <div class="grid grid-cols-12">
                <span class="sm:col-span-2 col-span-12 font-bold"> Languages </span>
                <span class="sm:col-span-10 col-span-12 font-extralight"> Java, Javascript, HTML, CSS, Python </span>
                <div class="sm:col-span-2 col-span-12 font-bold"> Frameworks </div>
                <div class="sm:col-span-10 col-span-12 font-extralight"> Angular, React, Springboot, Kafka </div>
                <div class="sm:col-span-2 col-span-12 font-bold"> DevOps </div>
                <div class="sm:col-span-10 col-span-12 font-extralight"> Git, Docker </div>
            </div>
      </div>
    );
  }
  
  export default Skills;
  