function SectionHeader(props) {

    return (
      <h1 class="mt-5 mb-2 flex items-end gap-2">
          <div class="text-2xl font-bold text-blue-400"> {props.title} </div>
          <div class="flex-grow bg-gray-400 h-0.5 mb-2"></div>
      </h1>
    );
  }
  
  export default SectionHeader;
  