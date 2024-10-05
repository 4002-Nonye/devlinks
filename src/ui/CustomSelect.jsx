import options from '../data/Options';

function CustomSelect() {
  return (
    <select  id="platform" className="input cursor-pointer px-3">
      {options.map((option) => (
        <option key={option.siteName}> {option.siteName}</option>
      ))}
    </select>
  );
}

export default CustomSelect;
