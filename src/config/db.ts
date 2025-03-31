import { Pool } from "pg";

// ? URI de conexión a PostgreSQL
export const pool = new Pool({
  connectionString: Bun.env.DATABASE_URL,
});








// const DB_URL = Bun.env.DATABASE_URL  || "postgresql://postgres:" ;

// if (!DB_URL) {
//   throw new Error("DATABASE_URL is required");  
// }

// export const db = drizzle(DB_URL, {
//   schema,  
// });




