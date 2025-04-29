import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col text-4xl space-y-20 justify-center  min-h-[100dvh] items-center">
      {/* Allows the content to be displayed using 100% of the screen also making it dynamic to apear better on mobile devices accounting for status bar at the top*/}
      <h1>
        Welcome to <span className="px-4 font-bold p-2 text-white bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl "> My Own Story</span>
      </h1>
      <Link href={"/customise"} className="rounded-xl border-2 px-4 hover:bg-gradient-to-r from-blue-400 to-purple-500 p-2 ">Get started!</Link>
      {/* This line is essentially a button as we have told it to go to customise page when pressed and it will contain text get started */}
    </div>
  );
}
