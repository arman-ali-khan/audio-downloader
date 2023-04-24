import { connectToDatabase } from "../../../utils/db";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const { category } = req.query
  const filter = {  label: category  }
  const posts = await db.collection("categories").findOne(filter);

  res.status(200).send(posts);
}
