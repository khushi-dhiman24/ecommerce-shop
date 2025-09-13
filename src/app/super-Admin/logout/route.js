import { NextResponse } from "next/server";

export async function POST() {
  try {
    // If you’re using cookies for auth, clear them:
    const response = NextResponse.json({ message: "Logged out successfully" });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error) {
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
