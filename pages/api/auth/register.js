import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { users } from "./../../../lib/drizzle";
import { db } from "./../../../lib/db";
import { eq, or } from "drizzle-orm";
// import { cookies } from "next/headers";
import { serialize } from "cookie";

const handler = async (req, res) => {
  try {
    // console.log(process.env.SECRET_KEY, req);
    if (!process.env.SECRET_KEY) {
      return res.json({
        status: 404,
        message: "Secret key not found",
      });
    }
    const { body } = req;
    console.log("🚀 ~ file: register.js:15 ~ handler ~ body:", body);

    if (!body.email || !body.name || !body.password) {
      return res.json({
        status: 400,
        message: "Name, email or password is missing.",
      });
    }
    const chkUser = await db
      .select()
      .from(users)
      .where(or(eq(users.email, body.email)));

    if (chkUser.length > 0) {
      return res.json({
        message: "Sorry a user with this email address already exists",
        status: 400,
      });
    }

    const salt = bcrypt.genSaltSync(10);
    let secPass = await bcrypt.hash(body.password, salt);
    const query = await db
      .insert(users)
      .values({
        name: body.name,
        email: body.email,
        password: secPass,
        created_at: new Date(),
      })
      .returning({
        _id: users._id,
        name: users.name,
        email: users.email,
        role: users.role,
      });

    const data = {
      user: {
        id: query[0]._id,
      },
    };
    const authToken = jwt.sign(data, process.env.SECRET_KEY);
    // cookies().set("authToken", authToken);
    const serialized = serialize("authToken", authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      path: "/",
    });
    res.setHeader("Set-Cookie", serialized);
    res.status(200).json({ authToken });
  } catch (error) {
    console.log("POST request error:", error);
    return res.json({ status: 500, message: "Internal Server Error" });
  }
};

export default handler;
