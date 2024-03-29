import { connectToDatabase } from "../../../utils/db";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const { category } = req.query
  const filter = { categories: { $elemMatch: { label: category } } }
  const posts = await db.collection("files").find(filter).toArray();

  res.status(200).send(posts);
}
