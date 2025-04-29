"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function YourStory() {
  // const response = await fetch("http://localhost:3000/API/CustomStory", {
  //   method: "GET",
  //   headers: { "content-type": "application/json" },
  // });

  // const data = await response.json();
  // const story = data.firstStory;

  const [story, setStory] = useState("");

  useEffect(() => {
    fetch("API/CustomStory")
    .then(res => res.json())
    .then(data => setStory(data.firstStory));
  })

  return (
    <div className="flex flex-col text-xl ">
      <div className="flex flex-row space-x-10 p-6 py-10 text-4xl">
        <Link
          href={"/customise"}
          className=" flex items-center rounded-xl px-4 border-5 border-[#252525] hover:bg-gradient-to-r from-blue-400 to-purple-500 p-2"
        >
          Go back
        </Link>
        <h1 className="flex-1 px-4 font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex flex-col items-center p-6 py-5">
          {" "}
          Here's your story!
        </h1>
      </div>
      <div className="rounded-xl p-15 bg-[#252525] text-justify">
        <p>{story}</p>
      </div>
    </div>
  );
}
