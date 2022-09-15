import React from 'react';

const BooksSearch = () => {
  return (
    <header className="pt-[5%] text-slate-400  text-center max-w-240 mx-auto px-4">
      <h1 className="text-7xl ">Books Search</h1>
      <div className="flex mt-4">
        <input
          type="text"
          placeholder="Enter a book name"
          className="p-4 rounded w-full shadow-xl"
        />
        <button>Search</button>
      </div>
    </header>
  );
};

export default BooksSearch;
