import SectionHeader from '../Components/SectionHeader'

function Experience() {
    return (
      <div>
        <SectionHeader title="Experience" />
        <div class="mb-2 grid grid-cols-2">
            <div class="font-bold"> MSI Global Pte Ltd </div>
            <div class="grid text-blue-400 text-xs font-light italic justify-items-end content-end"> LTA Bedok Campus </div>
            <div class="uppercase text-xs font-light"> Associate Consultant </div>
            <div class="grid text-xs font-extralight italic justify-items-end"> Nov. 2020 - Apr. 2022 </div>
        </div>
        <ul class="mb-6 list-disc list-inside font-extralight">
            <li> Technical Lead for the BTS Skytrain backoffice fare collection system. (Java, Swing, Quartz Scheduler) </li>
            <li> Led the backend team for the Pink and Yellow Line Extension Project. </li>
            <li> Led various initiatives to improve the maintainability of legacy applications such as framework upgrades, introducing the use of version control systems and adding unit testing. </li>
            <li> Developed  microservices for the Bangalore backend QR code ticketing system (Springboot) </li>
        </ul>

        <div class="mb-2 grid grid-cols-2">
            <div class="font-bold"> PSA International Pte Ltd </div>
            <div class="grid text-blue-400 text-xs font-light italic justify-items-end content-end"> Tanjong Pagar Complex </div>
            <div class="uppercase text-xs font-light"> Senior System Analyst </div>
            <div class="grid text-xs font-extralight italic justify-items-end"> Jun. 2018 - Jul 2020 </div>
        </div>
        <ul class="mb-6 list-disc list-inside font-extralight">
            
            <li> Developed a generic housekeeping framework to orchestrate archival of database records for microservices. (Kafka, Java, JPQL) </li>
            <li> Built microservices and Angular applications for tracking container movement within the port (Angular, Springboot, MySQL) </li>
            <li> Managed framework level components including the analysis, design and development of new components as well as the maintenance and upgrading of existing components. (StorybookJS, Angular, Springboot) </li>
            <li> Technical Lead for testing frameworks. (Katalon) </li>
            <li> Technical Lead for Data Warehouse and ETL Pipeline Infrastructure (Kafka, Kafka Connect, Debezium, Springboot)</li>
            <li> Technical Lead for git infrastructure (On premise Gitlab). </li>
        </ul>

        <div class="mb-2 grid grid-cols-2">
            <div class="font-bold"> PSA Singapore </div>
            <div class="grid text-blue-400 text-xs font-light italic justify-items-end content-end"> Tanjong Pagar Complex </div>
            <div class="uppercase text-xs font-light"> Intern </div>
            <div class="grid text-xs font-extralight italic justify-items-end"> May. 2017 - Oct. 2017 </div>
        </div>
        <ul class="mb-6 list-disc list-inside font-extralight">
            <li> Developed Angular components and Data Visualisations for ship schedules (D3, Angular and PrimeNG) </li>
            <li> Developed custom stylesheets and themes for Angular components (CSS, SASS) </li>
        </ul>
      </div>
    );
  }
  
  export default Experience;
  