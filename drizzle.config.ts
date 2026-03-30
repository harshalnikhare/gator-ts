import { defineConfig } from "drizzle-kit";
import path from "node:path";
import { readConfig } from "./src/config.ts";

const dbDataPath = path.join("src", "lib", "db");

const { dbUrl } = readConfig();

export default defineConfig({
  schema: path.join(dbDataPath, "schema.ts"),
  out: path.join(dbDataPath, "out"),
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl,
  },
});
