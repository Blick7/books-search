import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import coverNotFound from '../../public/static/assets/no-book-cover-available.jpg';
import { AiFillStar } from 'react-icons/ai';
const axios = require('axios').default;

const BookItem = ({
  title,
  coverId,
  author,
  publishYear,
  totalEditions,
  itemKey,
  savedBook,
}) => {
  const cover = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : coverNotFound;
  if (author && author.length > 2) {
    author = author[0];
  }
  // if (Array.isArray(itemKey)) {
  itemKey = itemKey.split('/').slice(-1).toString();
  // }
  const addSavedBook = async () => {
    const response = await axios.post('/api/add-saved-book', {
      title,
      coverId: coverId || null,
      author,
      publishYear,
      totalEditions,
      itemKey,
    });
    console.log(response);
  };

  return (
    <li className="group max-w-xs w-full h-136 bg-[#dfb783] rounded-2xl p-4 flex flex-col relative">
      <Link href={itemKey}>
        <div className="w-64 h-80 relative flex justify-center items-center mx-auto cursor-pointer">
          <Image
            src={cover}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </Link>
      <div className="flex flex-col justify-between grow mt-4">
        <Link href={itemKey}>
          <h3 className="text-center text-2xl group-hover:underline max-h-24 h-full overflow-hidden cursor-pointer">
            {title}
          </h3>
        </Link>
        <div>
          <div>
            <span className="font-bold">Author: </span>
            {author}
          </div>
          <div>
            <span className="font-bold">Publication Year: </span>
            {publishYear || 'unknown'}
          </div>
          <div>
            <span className="font-bold">Total Editions: </span>
            {totalEditions || 'unknown'}
          </div>
        </div>
      </div>
      <div>
        {!savedBook && (
          <button
            className="text-yellow-400 text-5xl absolute top-2 right-2 hover:text-yellow-600 duration-500"
            onClick={addSavedBook}
          >
            <AiFillStar />
          </button>
        )}
      </div>
    </li>
  );
};

export default BookItem;
