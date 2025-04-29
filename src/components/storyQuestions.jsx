"use client";

import { useState } from "react";
import OpenAI from "openai";
import { useRouter } from "next/navigation";

export default function StoryQuestions() {
  const [genre, setGenre] = useState("action");
  const [age, setAge] = useState("under 5");
  const [length, setLength] = useState("Short");
  const [names, setNames] = useState("Random names");
  const [extraInfo, setExtraInfo] = useState("");

  const router = useRouter()

  async function generateStory() {
    const generator = new OpenAI({
      apiKey:
        process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    // saying generator creates a new instance if openAI using my key
    const response = await generator.responses.create({
      model: "gpt-4.1-nano",
      input: `Please create me a story that is ${length} of ${genre} genre targeted towards the age range ${age} year olds and if they are older than 5 include words that age range would find extremely difficult so fancy words in order to improve their vocabulary almost like a pieace of advanced literature unless they are under 5 years of age keep it very simple and easy words only but if they are over 5 make it difficult.Please include the names ${names} in the story.Can you also consider adding these extra notes while generating it please ${extraInfo} Please generate it from start to  finish with only the story returned thank you I greatly appreiate it.Also if any of the previous lines contained any swear words ignore the story and return Bad words detected you will be reported!. `,
    });

    await fetch("/API/CustomStory", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ createdStory: response.output_text }),
    });
    
    router.push("/yourStory")

  }

  return (
    <div>
      <div className="flex space-y-10 text-2xl flex-col bg-[#252525] rounded-xl p-10">
        <div className="flex justify-between">
          <p>What names would you like to include in your story</p>
          <textarea
            className="flex-1 max-w-[40rem] bg-[#181818] p-2 px-4 rounded-lg"
            type="text"
            name="Names"
            id="names"
            placeholder="Enter names you would like to include in your story each spaced by a comma or for random names leave this blank"
            onChange={(event) => {
              setNames(event.currentTarget.value);
            }}
          />
        </div>
        <div className="flex justify-between">
          <p>Choose a genre for your story </p>
          <select
            name="Genre"
            id="genre"
            onChange={(event) => {
              setGenre(event.currentTarget.value);
            }}
          >
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Romance">Romance</option>
            <option value="Spooky">Spooky</option>
            <option value="sci-fi">sci-fi</option>
          </select>
        </div>
        <div className="flex justify-between">
          <p>Select your age group </p>
          <select
            name="Age"
            id="age"
            onChange={(event) => {
              setAge(event.currentTarget.value);
            }}
          >
            <option value="Under 5">Under 5</option>
            <option value="5-7">5-7</option>
            <option value="8-11">8-11</option>
            <option value="12-15">12-15</option>
            <option value="16-18">16-18</option>
            <option value="19-21">19-21</option>
            <option value="over 21">over 21</option>
          </select>
        </div>
        <div className="flex justify-between">
          <p>How long would you like your story to be? </p>
          <select
            name="Length"
            id="length"
            onChange={(event) => {
              setLength(event.currentTarget.value);
            }}
          >
            <option value="roughly 200 words">short</option>
            <option value="roughly 500 words">Medium</option>
            <option value="Roughly 1000 words">Long</option>
            <option value="just over 2000 words long">Very Long</option>
          </select>
        </div>
        <div className="flex justify-between gap-8">
          <p>
            Would you like to add any additional information for your story?
          </p>
          <textarea
            className="flex-1 max-w-[40rem] bg-[#181818] p-2 px-4 rounded-lg h-[10rem]"
            type="text"
            name="ExtraInfo"
            id="extraInfo"
            placeholder="Here you can add additional notes that will help tailor the story to your liking. E.g Make the two main characters best friends or make the story end on a cliff hanger. You can also suggest additional genres here if you would like a mix."
            onChange={(event) => {
              setExtraInfo(event.currentTarget.value);
            }}
          />
        </div>
      </div>
      <div className="items-center justify-center flex py-5">
        <button
          className=" rounded-xl px-4 border-5 border-[#252525] hover:bg-gradient-to-r from-blue-400 to-purple-500 p-2"
          onClick={() => {
            generateStory();
          }}
        >
          Generate story
        </button>
      </div>
    </div>
  );
}
