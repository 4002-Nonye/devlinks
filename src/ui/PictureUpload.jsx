import { AiOutlinePicture } from 'react-icons/ai';

function PictureUpload() {
  return (
    <div className="inline-flex md:flex-row flex-col  md:items-center gap-2">
      <label htmlFor="avatar" className="custom-file-input">
        <AiOutlinePicture className="text-4xl font-extrabold" />
        <span className="text-center">+ Upload image</span>
        <input type="file" name="avatar" id="avatar" />
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
