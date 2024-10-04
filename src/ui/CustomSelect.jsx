import PropTypes from 'prop-types';

CustomSelect.propTypes = {
  option: PropTypes.string,
};

function CustomSelect({ option }) {
  const options = [
    {
      icon: '',
      siteName: 'GitHub',
    },
    {
      icon: '',
      siteName: 'Frontend Mentor',
    },
    {
      icon: '',
      siteName: 'Twitter',
    },
    {
      icon: '',
      siteName: 'LinkedIn',
    },
    {
      icon: '',
      siteName: 'YouTube',
    },
    {
      icon: '',
      siteName: 'Facebook',
    },
    {
      icon: '',
      siteName: 'Twitch',
    },
    {
      icon: '',
      siteName: 'Dev.to',
    },
    {
      icon: '',
      siteName: 'Codewars',
    },
    {
      icon: '',
      siteName: 'Codepen',
    },
    {
      icon: '',
      siteName: 'freeCodeCamp',
    },
    {
      icon: '',
      siteName: 'GitLab',
    },
    {
      icon: '',
      siteName: 'Hashnode',
    },
    {
      icon: '',
      siteName: 'Stack Overflow',
    },
  ];
  return (
    <select name="" id="" className="input cursor-pointer px-3">
    {options.map(option=><option key={option.siteName}>{option.siteName}</option>)}
      <option value={option}>{option}</option>
    </select>
  );
}

export default CustomSelect;
