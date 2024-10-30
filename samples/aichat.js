import * as dotenv from "dotenv";
import { createInterface } from "readline";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

let prompt = "Hi";

rl.on("line", (line) => {
    prompt = line;
    rl.close();
})

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

rl.on("close", () => {
    (async () => {
        try {
            const res = await openai.createCompletion({
                prompt,
                model: "text-davinci-003",
                max_token: 160,
                temperature: 0.7,
                stream: false,
            });
            console.log(res.data.choice[0].text);
            return;
        } catch (e) {
            console.log("Error");
            return;
        }
    })();
});
