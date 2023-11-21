export const runtime = "experimental-edge";
import { jwtVerify, SignJWT } from "jose";
export const getJWTSecretKey = () => {
  const SECRET_KEY = process.env.SECRET_KEY;
  if (!SECRET_KEY || SECRET_KEY.length === 0) {
    throw new Error("Secret key not found.");
  }
  return SECRET_KEY;
};

export async function verifyAuth(token) {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJWTSecretKey())
    );

    return verified.payload;
  } catch (error) {
    console.log("🚀 ~ file: auth.ts:27 ~ error:", error);
  }
}
