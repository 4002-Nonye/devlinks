import { createElement } from 'react';
import toast from 'react-hot-toast';

import link from '../../assets/link.svg';

export function useShareLink() {
  const handleCopyToClipBoard = async (LinkToShare) => {
    try {
      await navigator.clipboard.writeText(LinkToShare);

      toast.success('The link has been copied to your clipboard!', {
        // Using createElement instead of JSX
        icon: createElement('img', {
          src: link,
          alt: 'link Icon',
          style: { width: '22px', marginLeft: '8px', marginTop: '4px' },
        }),
      });
    } catch (error) {
      console.log('Failed to copy text', error.message);
    }
  };
  return { handleCopyToClipBoard };
}
