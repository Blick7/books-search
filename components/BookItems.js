import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import BookItem from './BookItem';

const axios = require('axios').default;

const BookItems = () => {
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState();
  const search = useSelector((state) => state.search.searchInput);

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        setIsLoading(true);
        const response = axios
          .get(`http://openlibrary.org/search.json?q=${search}`)
          .then((response) => {
            console.log(response.data.docs);
            setSearchData(response.data.docs);
            setIsLoading(false);
          })
          .catch((error) => console.log(error));
      }
    };
    fetchData();
  }, [search]);

  return (
    <div className="flex flex-wrap justify-center items-center px-10 max-w-440 mx-auto mt-8 mb-8 gap-4">
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
      {isLoading && <p className="text-red-700">IS LOADING>>>>>>></p>}
    </div>
  );
};

export default BookItems;
