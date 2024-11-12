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
      onSuccess: () => reset(),
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
        <div className="mb-10 flex flex-col justify-between rounded-md bg-white-200 p-7 md:flex-row md:items-center xl:p-3">
          <label htmlFor="avatar" className="labelClass">
            Profile picture
          </label>
          <PictureUpload />
        </div>
        <UserDetailsInput />

        <div className="pt-2 text-right">
          <Button variant="save">
            {isPending ? <Spinner size="md" variant="#ffffff" /> : 'Save'}
          </Button>
        </div>
      </form>
    </>
  );
}

export default Profile;
