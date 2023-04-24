import { connectToDatabase } from "../../../utils/db";


export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const posts = await db.collection("files").find().sort({title:-1}).limit(5).toArray();

  res.status(200).send(posts);
}
