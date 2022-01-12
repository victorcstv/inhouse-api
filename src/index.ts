import express from 'express';
import cors from 'cors';
import routes from './routes';
import './database';

const app = express();
const PORT = 3333 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
  return response.json({ message: 'Inhouse API is running!' });
})

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}!`);    
});