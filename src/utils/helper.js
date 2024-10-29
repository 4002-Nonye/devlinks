import options from '../data/Options';

export const validateUrl = (url) => {
  const urlPattern = new RegExp(
    /^(https?:\/\/)?((([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[^\s]*)?$/
  );
  

  return urlPattern.test(url);
};

// Get the platform details (icon and color) based on platform name
export const getPlatformDetails = (platform, icon) => {
  const option = options.find((option) => option.platform === platform);
  return option ? option : { icon, color: '#191919', platform: 'Github' }; // Default values
};
