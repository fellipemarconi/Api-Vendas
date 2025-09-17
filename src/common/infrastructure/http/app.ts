import express from 'express'
import cors from 'cors'
import { routes } from './routes'
import { errorHandler } from './middlewares/errosHandler'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Vendas',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: [], // Caminho para os arquivos de rotas
}

const swaggerSpec = swaggerJSDoc(options)

export const app = express()

app.use(cors())
app.use(express.json())
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
app.use(routes)
app.use(errorHandler)
