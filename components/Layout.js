// @ts-nocheck

import React from 'react';
import Image from 'next/image';

import bookshelfImg from '../public/static/assets/knigi_biblioteka_polki_138556_1280x720.jpg';
import BooksSearch from './BooksSearch';

const Layout = () => {
  return (
    <>
      <div className="fixed h-screen w-screen overflow-hidden -z-10">
        <Image
          src={bookshelfImg}
          alt="book-shelf"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <BooksSearch />
    </>
  );
};

export default Layout;
