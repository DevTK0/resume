import SectionHeader from '../Components/SectionHeader'

function Education() {
    return (
      <div>
        <SectionHeader title="Education" />
        <div class="grid grid-cols-12">
            <div class="col-span-10 font-bold"> National University of Singapore </div>
            <div class="col-span-2 text-blue-400 text-xs font-light italic justify-items-end content-end"> </div>
            <div class="col-span-10 font-light"> Bachelor of Computing (Computer Science) With Honours </div>
            <div class="col-span-2 grid text-xs font-extralight italic justify-items-end"> Jun. 2018 </div>
        </div>
      </div>
    );
  }
  
  export default Education;
  