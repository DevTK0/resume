import SectionHeader from "../Components/SectionHeader";

function Certifications() {
    return (
        <div>
            <SectionHeader title="Certifications" />
            <div class="mb-2 grid grid-cols-2">
                <div class="font-bold"> AWS Certified Cloud Practitioner </div>
                <div class="grid text-blue-400 text-xs font-light italic justify-items-end content-end">
                    {" "}
                </div>
                <div class="font-light"> Amazon Web Services (AWS) </div>
                <div class="grid text-xs font-extralight italic justify-items-end">
                    {" "}
                    May. 2022 - May. 2025{" "}
                </div>
            </div>
            <div class="mb-2 grid grid-cols-2">
                <div class="font-bold"> AWS Certified Solutions Architect </div>
                <div class="grid text-blue-400 text-xs font-light italic justify-items-end content-end">
                    {" "}
                </div>
                <div class="font-light"> Amazon Web Services (AWS) </div>
                <div class="grid text-xs font-extralight italic justify-items-end">
                    {" "}
                    Aug. 2022 - Aug. 2025{" "}
                </div>
            </div>
        </div>
    );
}

export default Certifications;
