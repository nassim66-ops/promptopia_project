import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    // .populate('creator'): this one make sure that we get the creator as User not just as ObjectId (as a string)
    const Prompts = await Prompt.find().populate("creator");

    return new Response(JSON.stringify(Prompts), { status: 201 });
  } catch (error) {
    return new Response("Failed to find the prompts", { status: 500 });
  }
};
