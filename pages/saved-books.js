import React from 'react';
import Background from '../components/UI/Background';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { MongoClient } from 'mongodb';
import BookItem from '../components/Books/BookItem';

import { BiArrowBack } from 'react-icons/bi';
const SavedBooks = (props) => {
  const { books } = props;
  const router = useRouter();
  console.log(books);
  return (
    <>
      <Head>
        <title>Saved Books</title>
        <meta name="description" content="Show saved books" />
      </Head>
      <Background />
      <div className="pt-[5%] text-slate-400  text-center max-w-240 mx-auto px-4 flex flex-col">
        <h2 className="text-7xl font-medium">Your saved books:</h2>
        <button
          className="text-black font-bold mt-4 flex justify-center items-center text-2xl w-52 bg-slate-400 rounded-2xl"
          onClick={() => router.back()}
        >
          <BiArrowBack className="text-6xl pr-2" /> Go back
        </button>
      </div>
      <section className="flex items-center">
        <ul className="flex flex-wrap justify-center sm:px-10 px-2 max-w-440 mx-auto mt-8 mb-8 gap-8">
          {books.map((item) => (
            <BookItem
              key={item.key}
              title={item.title}
              coverId={item.coverId}
              author={item.author_name}
              publishYear={item.first_publish_year}
              totalEditions={item.edition_count}
              itemKey={item.itemKey}
              savedBook={true}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default SavedBooks;

export async function getStaticProps() {
  MongoClient.connect();

  const client = await MongoClient.connect(
    'mongodb+srv://blick:blick@cluster0.jiqr9ll.mongodb.net/books?retryWrites=true&w=majority'
  );
  const db = client.db();

  const booksCollection = db.collection('books');

  const books = await booksCollection.find().toArray();

  console.log(books);

  return {
    props: {
      books: books.map((book) => ({
        key: book._id.toString(),
        title: book.title,
        author: book.author,
        publishYear: book.publishYear,
        totalEditions: book.totalEditions,
        itemKey: book.itemKey,
        coverId: book.coverId,
      })),
    },
    revalidate: 1,
  };
}
