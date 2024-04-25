import short from 'short-uuid'
import { Elysia } from 'elysia'

new Elysia()
    .get('/', () => Response.json({
      id: 4555,
      name: `Hello Elysia 2025 =  ${short.generate()} `
    }) )
    .get('/productos', ({query: {name} }) => Response.json ({
      id: 4555,
      descripcion: name,
      name: `Hello Elysia 2025 =  ${short.generate()} `
    }) )
    .get('/user/:id', ({ params: { id }}) => id)
    .post('/form', ({ body }) => body)
    .listen(3000)











// const server = Bun.serve({
//     port: 3000,
//     fetch(req) {

//         const pepe = short.generate()
//       return new Response("Hello= " + pepe);
//     },
//   });
  
//   console.log(`Listening on http://localhost:${server.port} ...`);
