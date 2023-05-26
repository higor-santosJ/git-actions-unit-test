import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'server is running' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export { app }