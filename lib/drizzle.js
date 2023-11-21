import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";
export const users = pgTable("users", {
  _id: serial("_id").primaryKey(),
  name: varchar("name", {
    length: 255,
  }).notNull(),
  email: varchar("email", {
    length: 255,
  }).notNull(),
  password: varchar("password", {
    length: 255,
  }).notNull(),
  created_at: timestamp("created_at").notNull(),
  role: varchar("role", { length: 50 }).notNull().default("user"),
});
