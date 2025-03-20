import { Hono } from 'hono'

const app = new Hono()


const port = process.env.PORT || "3005";

app.get('/', (c) => {

  console.time("Tiempo total");

  // Crear un array con 500,000 elementos
  const registros = Array.from({ length: 90000000 }, (_, i) => i + 1);

  // Leer los registros con un bucle `for`
  for (let i = 0; i < registros.length; i++) {
    let dato = registros[i]; // Simulación de lectura
  }

  console.timeEnd("Tiempo total");

  return c.text('Hello Hono peru')
})




app.get("/users", (c) => c.text("¡Hola desde Hono! 🚀"));

export default app
