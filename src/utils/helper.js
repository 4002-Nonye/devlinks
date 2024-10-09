import options from '../data/Options';

export const validateUrl = (url) => {
  const regex =
    /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;
  return regex.test(url);
};

// Get the platform details (icon and color) based on platform name
export const getPlatformDetails = (platform, icon) => {
  const option = options.find((option) => option.platform === platform);
  return option ? option : { icon, color: '#191919', platform: 'Github' }; // Default values
};
