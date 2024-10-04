import Button from '../../ui/Button';

function UserDetailsForm() {
  return (
    <div className="bg-white-200 p-3 md:p-7 rounded-md">
      <form action="" className="space-y-5">
        <div className="flexClass ">
          <label htmlFor="firstName" className="labelClass">
            First name*
          </label>
          <input
            type="text"
            placeholder="e.g John"
            className="input w-[70%] px-3"
          />
        </div>

        <div className="flexClass">
          <label htmlFor="lastName" className="labelClass">
            Last name*
          </label>
          <input
            type="text"
            placeholder="e.g Appleseed"
            className="input w-[70%] px-3"
          />
        </div>

        <div className="flexClass ">
          <label htmlFor="email" className="labelClass">
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
  );
}

export default UserDetailsForm;
