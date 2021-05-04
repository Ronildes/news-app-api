import express from 'express';
import cors from 'cors';
import routes from './routes/index';

import './database/index';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log('Server is online in port 3333');
});
