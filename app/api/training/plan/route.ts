import { NextApiHandler } from "next";
import { NextRequest, NextResponse } from "next/server";

export const POST = (req: NextRequest) => {
  return NextResponse.json("ok");
};
