import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// @NOTICE: Superbase supports connection pooling. But, drizzle does not support connection pooling.
const client = postgres(process.env.DATABASE_URL!, { prepare: false });

const db = drizzle(client);

export default db;