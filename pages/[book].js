import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Background from '../components/UI/Background';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import coverNotFound from '../public/static/assets/no-book-cover-available.jpg';
import { BiArrowBack } from 'react-icons/bi';
const axios = require('axios').default;

const enumerateString = (item, index, length) => {
  return index !== length - 1 ? `${item}, ` : `${item}.`;
};

const Book = () => {
  const [book, setBook] = useState();
  const router = useRouter();
  const cover = book?.data.covers
    ? `https://covers.openlibrary.org/b/id/${book?.data.covers[0]}-L.jpg`
    : coverNotFound;

  useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      await axios
        .get(`https://openlibrary.org/works/${router.query.book}.json`)
        .then((response) => {
          console.log(response);
          cover = book
            ? `https://covers.openlibrary.org/b/id/${response.data.covers[0]}-L.jpg`
            : coverNotFound;
          setBook(response);
        })
        .catch((error) => console.log(error));
    };
    if (!router.isReady) return;
    fetchData();
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>Books Search</title>
        <meta name="description" content="Search books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <section className="pt-48 px-8 h-160">
        <div className="max-w-5xl w-full h-full p-10 pt-20 rounded-xl mx-auto bg-[#dfb783] flex shadow-2xl relative">
          <div className="w-64 h-80 relative flex justify-center items-center  basis-3/12">
            <Image
              src={cover}
              alt={'SMILE'}
              layout="fill"
              objectFit="contain"
              className="rounded-2xl"
            />
          </div>
          <div className="basis-9/12 overflow-y-auto p-2">
            <div>
              <span className="font-bold">Description: </span>
              {typeof book?.data.description !== 'object'
                ? book?.data.description
                : 'unknown' || typeof book?.data.description === 'object'
                ? book?.data.description.value.split('Source')[0]
                : 'unknown'}
            </div>
            <div className="pt-2">
              <span className="font-bold">Subjects: </span>
              {book?.data.subjects
                ? book?.data.subjects.map((item, index) =>
                    enumerateString(item, index, book?.data.subjects.length)
                  )
                : 'unknown'}
            </div>
            <div className="pt-2">
              <span className="font-bold">Characters: </span>
              {book?.data.subject_people
                ? book?.data.subject_people.map((item, index) =>
                    enumerateString(
                      item,
                      index,
                      book?.data.subject_people.length
                    )
                  )
                : 'unknown'}
            </div>
            <div className="pt-2">
              <span className="font-bold">Places: </span>
              {book?.data.subject_places
                ? book?.data.subject_places.map((item, index) =>
                    enumerateString(
                      item,
                      index,
                      book?.data.subject_places.length
                    )
                  )
                : 'unknown'}
            </div>
          </div>
          <button
            className="absolute top-2 flex justify-center items-center text-2xl"
            onClick={() => router.back()}
          >
            <BiArrowBack className="text-6xl pr-2 animate-bounce" /> Go back
          </button>
        </div>
      </section>
    </>
  );
};

export default Book;
