import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../store/searchSlice';

import BookItem from './BookItem';
import LoadingSpinner from './LoadingSpinner';

const axios = require('axios').default;

const BookItems = () => {
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState();
  const search = useSelector((state) => state.search.searchInput);
  const searchItems = useSelector((state) => state.search.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        setIsLoading(true);
        const response = axios
          .get(`http://openlibrary.org/search.json?q=${search}`)
          .then((response) => {
            console.log(search);
            setSearchData(response.data.docs);
            dispatch(setItems(response.data.docs));
            setIsLoading(false);
          })
          .catch((error) => console.log(error));
      }
    };
    fetchData();
  }, [search]);

  useEffect(() => {
    setSearchData(searchItems);
  }, [searchItems]);

  return (
    <div className="flex flex-wrap justify-center items-center px-10 max-w-440 mx-auto mt-8 mb-8 gap-8">
      {!isLoading &&
        searchData &&
        searchData.map((item) => (
          <BookItem
            key={item.key}
            title={item.title}
            coverId={item.cover_i}
            author={item.author_name}
            publishYear={item.first_publish_year}
            totalEditions={item.edition_count}
            itemKey={item.key}
          />
        ))}
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default BookItems;
