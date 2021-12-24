import MongoDB from "../../lib/dbConnect.js";
import Question from "../../models/questionSchema.js";

const handler = async (req, res) => {
  await MongoDB();

  const { method } = req;

  switch (method) {
    case "GET":
      const { category: kategori } = req.query;
      const questionCount = await Question.countDocuments({
        category: kategori,
      });
      const randomOffset = Math.floor(Math.random() * questionCount);

      const question = await Question.findOne({ category: kategori }).skip(
        randomOffset
      );

      res.json(question);
      break;
    case "POST":
      const { text, category } = req.body;
      const document = {
        text,
        category,
      };

      await Question.create(document);

      res.status(201).json({
        status: 201,
        message: "success",
      });
      break;
    default:
      break;
  }
};

export default handler;
