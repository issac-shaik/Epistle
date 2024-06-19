import jwt from "jsonwebtoken";

export interface DecodedToken {
  id: number;
  avatarUrl: string;
  iat: number;
  exp: number;
}

export const decodeToken = (token: string): DecodedToken | null => {
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as DecodedToken;
    return decoded;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
