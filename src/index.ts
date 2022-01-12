import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3333 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'NodeJS template is running!' })
})

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}!`);    
});