import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { users } from "./../../../lib/drizzle";
import { db } from "./../../../lib/db";
import { eq } from "drizzle-orm";
import { serialize } from "cookie";

let JWT_SECRET_KEY;
if (typeof process.env.SECRET_KEY === "string") {
  JWT_SECRET_KEY = process.env.SECRET_KEY;
}

const POST = async (req, res) => {
  try {
    console.log("body");
    if (!process.env.SECRET_KEY) {
      return res.json({
        status: 404,
        message: "Secret key not found.",
      });
    }

    console.log("body");
    const { body } = req;
    console.log(body);

    if (!body.email || !body.password) {
      return res.json({
        message: "Email, or password is missing.",
      });
    }
    const user = await db
      .select({
        _id: users._id,
        name: users.name,
        email: users.email,
        password: users.password,
      })
      .from(users)
      .where(eq(users.email, body.email));
    if (user.length === 0) {
      return res.json({
        message: "Email not found. Please register!",
        status: 400,
      });
    }

    //check encrypted password
    if (typeof body.password === "string") {
      const passwordCompare = await bcrypt.compare(
        body.password,
        user[0].password
      );
      if (!passwordCompare) {
        return res.json({ message: "Incorrect password", status: 400 });
      }
      const data = {
        user: {
          id: user[0]._id,
        },
      };
      const authToken = jwt.sign(data, process.env.SECRET_KEY);
      const serialized = serialize("authToken", authToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        path: "/",
      });
      res.setHeader("Set-Cookie", serialized);
      return res.json({
        message: "User Credential found, Allow user to access.",
        status: 200,
        data: { _id: user[0]._id, name: user[0].name, email: user[0].email },
      });
    }
  } catch (error) {
    console.log("POST request error:", error);
    return res.json({ status: 500, message: "Internal Server Error." });
  }
};

export default POST;
