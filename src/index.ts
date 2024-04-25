import short from 'short-uuid'
import { Elysia } from 'elysia'

new Elysia()
    .get('/', () => `Hello Elysia 2025 =  ${short.generate()} ` )
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
