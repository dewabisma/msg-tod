import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    text: String,
    category: {
      type: String,
      enum: ["TRUTH", "DARE"],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.question ||
  mongoose.model("question", questionSchema);
