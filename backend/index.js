import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from 'dotenv' 
dotenv.config()

const apiKey = process.env.REACT_APP_OPENAI_KEY;
const orgID = process.env.OPENAI_ORG_ID;

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  organization: orgID,
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

const personality =
"You are a scientific expert and engineer. \
You are having an intellectual conversation about current events in technology and politics. \
As an Analytical Thinker (Left Brain Dominant), you excel in logical analysis, attention to detail, and systematic problem-solving. \
Your expertise lies in fields like mathematics, engineering, and scientific research. "

app.post("/", async (request, response) => {
  const { chats } = request.body;

  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: personality,
      },
      ...chats,
    ],
  });

  response.json({
    output: result.data.choices[0].message,
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
