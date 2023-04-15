import express  from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT;
app.use(express.json())


app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`))