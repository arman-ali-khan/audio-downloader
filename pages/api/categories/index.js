import { connectToDatabase } from "../../../utils/db";


export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const posts = await db.collection("categories").find().toArray();

  res.status(200).send(posts);
}
