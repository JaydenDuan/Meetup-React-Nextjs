// /api/new-meetup
import { MongoClient } from "mongodb";
async function handler(req, res) {
  console.log(req.body, "123");
  if (req.method === "POST") {

    try {
      const data = req.body;
      const client = await MongoClient.connect(
        "mongodb+srv://jaydenduan888:Woshige+12A@cluster0.csksvfp.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
      const obj = JSON.parse(data);
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(obj);
      client.close();
    } catch (error) {
      console.log(error);
    }

    res.status(201).json({ message: "Insert Success." });
  }
}

export default handler;
