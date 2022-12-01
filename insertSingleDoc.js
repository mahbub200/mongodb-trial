const { client } = require("./dbConfig");
// Insert a document
// ====================
const createDoc = async () => {
  try {
    const database = client.db("learnmongodb");
    const users = database.collection("users");
    const doc = {
      name: "Faisal ahmed",
      hobbies: ["Cooking", "Sports"],
    };
    const result = await users.insertOne(doc);
    console.log("Insert doc output=========>", result);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};
createDoc();
