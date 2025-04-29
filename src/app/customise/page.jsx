import StoryQuestions from "@/components/storyQuestions";
import Link from "next/link";


export default function customise() {
  return (
    <div className="flex flex-col text-4xl py-10 space-y-10  min-h-[100dvh] ">
      <h1 className="px-4 font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex flex-col items-center p-6 py-5"> Now it's time to create your own short story!</h1>
      <StoryQuestions/>
    </div>
  );
}
