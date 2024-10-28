
import PhoneContent from '../ui/PhoneContent';

function SharePreview() {
  
  return (
    <div className="relative ">
      <div className="  md:bg-blue md:h-80 md:rounded-b-[2rem] md:p-7 p-2 " />

      <div className="bg-white-100 md:shadow-lg rounded-lg h-[29rem] mt-6 md:mt-0 pb-6 w-72  m-auto absolute z-10 md:top-48 left-[50%] transform -translate-x-1/2 items-center pt-7 flex flex-col">
        <PhoneContent purpose="preview" />
      </div>
    </div>
  );
}

export default SharePreview;
