import { NextResponse } from "next/server";

let firstStory = ""; // wont be global is let is used this is my database btw

export async function POST(request) {
  /**
   * @type {{ createdStory: string }}
   */
  const data = await request.json();
  firstStory = data.createdStory;
  
  return NextResponse.json({ message: "Success"}, { status: 200 });

}

export async function GET(request) {
  return NextResponse.json({ firstStory}, { status: 200 }); //The status 200 lets client know it was a success the request.
}
 

