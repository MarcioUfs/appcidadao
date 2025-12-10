// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

const protectedRoutes = ["/pages/dashboard"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!protectedRoutes.includes(pathname)) return NextResponse.next();

  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.redirect(new URL("/pages/login", req.url));

  try {
    verifyToken(token);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/pages/login", req.url));
  }
}
