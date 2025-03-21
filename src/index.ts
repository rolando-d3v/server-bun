import { Hono } from 'hono'
import { userRoutes } from './api/personal/user.routes';
import { respuestaRoutes } from './api/respuesta/respuesta.routes';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';

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




// middleware
app.use('*', cors())
app.use(logger())
app.use(prettyJSON())
app.notFound((c) => {
  return c.text('Custom 404 Message', 404)
})




// routes
app.get("/users", (c) => c.text("¡Hola desde Hono! 🚀"));
app.route('/user', userRoutes)
app.route('/respuesta', respuestaRoutes)

export default app
