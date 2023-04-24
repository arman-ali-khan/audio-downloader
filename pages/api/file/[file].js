import { connectToDatabase } from "../../../utils/db";



export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const { file } = req.query
  const filter = {id:file}
  const posts = await db.collection("files").findOne(filter);

  res.status(200).send(posts);
}
