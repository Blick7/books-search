import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../store/searchSlice';
import { ImSearch } from 'react-icons/im';

const BooksSearch = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;

    dispatch(setSearch(value));
  };

  return (
    <header className="pt-[5%] text-slate-400  text-center max-w-240 mx-auto px-4">
      <h1 className="text-7xl font-medium">Books Search</h1>
      <form
        className="flex mt-4 bg-white shadow-xl rounded-3xl"
        onSubmit={onSubmitHandler}
      >
        <input
          type="text"
          placeholder="Enter a book name"
          className="p-4 w-full rounded"
          ref={inputRef}
        />
        <button className="bg-slate-400 rounded-r-md w-16 flex items-center justify-center hover:bg-slate-500 hover:rounded-r-2xl duration-75">
          <ImSearch className="text-3xl text-black " />
        </button>
      </form>
    </header>
  );
};

export default BooksSearch;
