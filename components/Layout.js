import React from 'react';

import BooksSearch from './BooksSearch';
import BookItems from './Books/BookItems';
import Background from './UI/Background';

const Layout = () => {
  return (
    <>
      <Background />
      <BooksSearch />
      <BookItems />
    </>
  );
};

export default Layout;
