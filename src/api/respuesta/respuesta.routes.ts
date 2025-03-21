import { Hono } from 'hono'
import * as Ctrl from './respuesta.controller'
import { zValidator } from '@hono/zod-validator'
import { schemaUser } from './respuesta.type.valid'


export const respuestaRoutes = new Hono()

respuestaRoutes.get('/all', Ctrl.allRespuesta)




// respuestaRoutes.post('/create', zValidator('json', schemaUser), Ctrl.createUser)
// respuestaRoutes.put('/update/:id', Ctrl.updatedUser)
// respuestaRoutes.delete('/delete/:id', Ctrl.updatedUser)
// respuestaRoutes.get('/id-user/:id', Ctrl.allUser)


