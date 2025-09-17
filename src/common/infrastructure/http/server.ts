import { app } from './app'
import { env } from '../env/index'

const port = env.PORT

app.listen(port, () => {
  console.log('Server is running ' + port)
})
