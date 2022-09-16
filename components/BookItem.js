import React from 'react';

const BookItem = ({ title }) => {
  return (
    <div className="text-green-900 text-4xl lg:basis-3/12 sm:basis-1/3 h-80 basis-1/1 grow bg-gray-700">
      {title}
      <div>Smile</div>
    </div>
  );
};

export default BookItem;
