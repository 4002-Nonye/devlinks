import { useUserProfile } from '../contexts/UserContext';
import UserDetailsInput from '../features/user/UserDetailsInput';
import { useEditProfile } from '../features/user/useEditProfile';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import PictureUpload from '../ui/PictureUpload';
import Spinner from '../ui/Spinner';

function Profile() {
  const { handleSubmit, reset } = useUserProfile();
  const { editProfileDetails, isPending } = useEditProfile();
  const onSubmit = (data) => {






     editProfileDetails(data, {
        // onSettled:()=>reset()
     });
  };

  const onError = (err) => {
    console.log(err);
  };

  return (
    <>
      <Heading purpose="Profile Details">
        Add your details to create a personal touch to your profile.
      </Heading>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col md:flex-row gap-5 md:gap-24  md:items-center bg-white-200 p-7 rounded-md mb-10">
          <label htmlFor="avatar" className="labelClass">
            Profile picture
          </label>
          <PictureUpload />
        </div>
        <UserDetailsInput />

        <div className="text-right pt-2 ">
          <Button variant="save">
            {isPending ? <Spinner size="md" variant="#ffffff" /> : 'Save'}
          </Button>
        </div>
      </form>
    </>
  );
}

export default Profile;
