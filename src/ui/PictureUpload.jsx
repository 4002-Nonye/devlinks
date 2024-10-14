import { useEffect, useState } from 'react';
import { AiOutlinePicture } from 'react-icons/ai';

import { useUserProfile } from '../contexts/UserContext';

function PictureUpload() {
  const { register, watch } = useUserProfile();
  const [backgroundImg, setBackGroundImg] = useState(null);

  // watch for changed in file upload
  const avatarFile = watch('avatar');
  
  useEffect(() => {
    // if an image was selected, create url for bg iamge
    if (avatarFile && avatarFile.length > 0) {
      const imageUrl = URL.createObjectURL(avatarFile[0]);
      setBackGroundImg(imageUrl);
    }
   else{ setBackGroundImg(null);} // if no image was selected, return null
   
  }, [avatarFile]);

  return (
    <div className="inline-flex md:flex-row flex-col  md:items-center gap-2">
      <label
        htmlFor="avatar"
        className="custom-file-input"
        style={{
          backgroundImage: backgroundImg ? `url(${backgroundImg})` : 'none',
        }}
      >
        <AiOutlinePicture
          className={`text-4xl font-extrabold ${backgroundImg ? 'text-white-100' : 'text-blue'}`}
        />
        <span
          className={`text-center capitalize ${backgroundImg ? 'text-white-100' : 'text-blue'}`}
        >
          {' '}
          {backgroundImg ? 'Change image' : '+ Upload image'}
        </span>
        <input
          type="file"
          name="avatar"
          id="avatar"
          accept=".png, .jpg, .jpeg"
          {...register('avatar', {
            required: `Can't be empty`,
          })}
        />
     {backgroundImg&&  <div className='absolute bg-black bg-opacity-35 top-0 bottom-0 left-0 right-0 -z-10 '/>}  
      </label>

      <span className="text-[.8rem] font-light text-brown-200">
        {' '}
        Image must be below 1024x1024px. <br />
        Use PNG or JPG format
      </span>
    </div>
  );
}

export default PictureUpload;
