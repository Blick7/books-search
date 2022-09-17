import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import coverNotFound from '../public/static/assets/no-book-cover-available.jpg';

const BookItem = ({
  title,
  coverId,
  author,
  publishYear,
  totalEditions,
  itemKey,
}) => {
  const cover = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : coverNotFound;
  if (author && author.length > 2) {
    author = author[0];
  }
  itemKey = itemKey.split('/').slice(-1).toString();
  // console.log(itemKey.split('/').slice(-1).toString());
  return (
    <Link href={itemKey}>
      <div className="group max-w-xs w-full h-136 bg-[#dfb783] rounded-2xl p-4 flex flex-col cursor-pointer hover:border-slate-700 hover:border-4 hover:scale-90 duration-75">
        <div className="w-64 h-80 relative flex justify-center items-center mx-auto">
          <Image
            src={cover}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col justify-between grow mt-4">
          <h3 className="text-center text-2xl group-hover:underline max-h-24 h-full overflow-hidden">
            {title}
          </h3>
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
      </div>
    </Link>
  );
};

export default BookItem;
