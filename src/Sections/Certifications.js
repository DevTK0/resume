import SectionHeader from '../Components/SectionHeader'

function Certifications() {
    return (
      <div>
        <SectionHeader title="Certifications" />
        <div class="grid grid-cols-12">

            <div class="col-span-10 font-bold"> NUS ISS </div>
            <div class="col-span-2 text-blue-400 text-xs font-light italic justify-items-end content-end"> </div>
            <div class="col-span-10 font-light"> NICF - Containers for deploying and scaling apps </div>
            <div class="col-span-2 grid text-xs font-extralight italic justify-items-end"> Sep. 2019 </div>

            {/* <div class="col-span-10 font-bold"> AWS </div>
            <div class="col-span-2 text-blue-400 text-xs font-light italic justify-items-end content-end"> </div>
            <div class="col-span-10 font-light"> Cloud Practitioner </div>
            <div class="col-span-2 grid text-xs font-extralight italic justify-items-end"> Nov. 2021 </div> */}
        </div>
      </div>
    );
  }
  
  export default Certifications;
  