import React from 'react';

import BooksSearch from './BooksSearch';
import BookItems from './BookItems';
import Background from './Background';

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
