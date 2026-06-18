import { defineConfig } from "drizzle-kit";
import { ENV } from "./Src/config/env";

export default defineConfig({
  schema: "./Src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: ENV.DATABASE_URL!,
  },
});

