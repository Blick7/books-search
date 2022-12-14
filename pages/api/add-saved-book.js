import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://blick:blick@cluster0.jiqr9ll.mongodb.net/books?retryWrites=true&w=majority'
    );

    const db = client.db();

    const meetupsCollection = db.collection('books');

    const result = await meetupsCollection.insertOne(data);

    client.close();
    res.status(201).json({ message: 'Book added' });
  }
}
