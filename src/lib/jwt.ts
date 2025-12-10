// src/lib/jwt.ts
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

export const generateToken = (payload: object, expiresIn = "15m") =>
  jwt.sign(payload, SECRET, { expiresIn });

export const verifyToken = (token: string) => jwt.verify(token, SECRET);
