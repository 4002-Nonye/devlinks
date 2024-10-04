import UserDetailsForm from '../features/user/UserDetailsForm';
import Heading from '../ui/Heading';
import PictureUpload from '../ui/PictureUpload';

function Profile() {
  return (
    <>
      <Heading purpose="Profile Details">
        Add your details to create a personal touch to your profile.
      </Heading>

      <div className="flex flex-col md:flex-row gap-5 md:gap-24  md:items-center bg-white-200 p-7 rounded-md mb-10">
        <label
          htmlFor="avatar"
          className="labelClass"
        >
          Profile picture
        </label>
        <PictureUpload />
      </div>
      <UserDetailsForm />
    </>
  );
}

export default Profile;
