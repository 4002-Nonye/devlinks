import { AiOutlinePicture } from 'react-icons/ai';

import Button from '../ui/Button';
import Heading from '../ui/Heading';

function Profile() {
  return (
    <>
      <Heading purpose="Profile Details">
        Add your details to create a personal touch to your profile.
      </Heading>

      <div className="flex flex-col md:flex-row gap-5 md:gap-24  md:items-center bg-white-200 p-7 rounded-md mb-10">
        <label
          htmlFor="avatar"
          className="text-brown-200 font-medium text-sm  "
        >
          Profile picture
        </label>



        <div className='inline-flex md:flex-row flex-col  md:items-center gap-2'>
        <label htmlFor="avatar" className="custom-file-input">
          <AiOutlinePicture className="text-4xl font-extrabold" />

          <span className='text-center'>+ Upload image</span>
          <input type="file" name="avatar" id="avatar" />
        </label>

        <span className='text-[.8rem] font-light text-brown-200'> Image must be below 1024x1024px. <br/>
        Use PNG or JPG format
        
        </span>
        </div>

       
      </div>

      <div className="bg-white-200 p-3 md:p-7 rounded-md">
        <form action="" className="space-y-5">
          <div className="flex justify-between items-center ">
            <label
              htmlFor="firstName"
              className=" text-brown-200 font-medium text-sm"
            >
              First name*
            </label>
            <input
              type="text"
              placeholder="e.g John"
              className="input w-[70%] px-3"
            />
          </div>

          <div className="flex justify-between  items-center">
            <label
              htmlFor="lastName"
              className=" text-brown-200 font-medium text-sm"
            >
              Last name*
            </label>
            <input
              type="text"
              placeholder="e.g Appleseed"
              className="input w-[70%] px-3"
            />
          </div>

          <div className="flex justify-between  items-center ">
            <label
              htmlFor="email"
              className=" text-brown-200 font-medium text-sm"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="e.g email@example.com"
              className="input w-[70%] px-3"
            />
          </div>

          <div className="text-right pt-2 ">
            <Button variant="save">Save</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;
