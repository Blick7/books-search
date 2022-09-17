import React from 'react';
import Image from 'next/image';

import bookImg from '../../public/static/assets/open-book-clipart-06-1-300x300.png';

const LoadingSpinner = () => {
  return (
    <div className="p-10">
      <Image
        src={bookImg}
        alt="book-image"
        width={200}
        height={200}
        className="animate-spin"
      />
    </div>
  );
};

export default LoadingSpinner;
